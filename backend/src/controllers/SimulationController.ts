import { Request, Response } from 'express'
import { get, put } from '../database'
import { v4 as uuid } from 'uuid'
import { ISimulationRepository } from '../repositories/ISimulationRepository'
import { exec, execSync } from 'child_process'

class SimulationController {
  constructor(private simulationRepository?: ISimulationRepository) {}

  async listAll(req: Request, res: Response) {
    const simulations = await get('simulations')
    return res.json(simulations)
  }

  async findOne(req: Request, res: Response) {
    const simulations = await get('simulations')
    const id = req.params.id
    return res.json(simulations[id])
  }

  async update(req: Request, res: Response) {
    const simulations = await get('simulations')
    const id = req.params.id
    simulations[id] = req.body.simulation
    const ok = await put('simulations', simulations)

    return res.json(ok)
  }

  async save(req: Request, res: Response) {
    const newSimulation = req.body.simulation
    newSimulation['status'] = '1'
    const newId = uuid()
    let idList = {}
    try {
      idList = await get('simulations')
    } finally {
      idList = idList['err'] ? {} : idList
    }
    idList[newId] = newSimulation
    const ok = await put('simulations', idList)
    return res.status(201).json({ [newId]: ok[newId] })
  }

  async run(req: Request, res: Response) {
    const srun = req.params.id
    let sims = {}
    let pipes = {}
    try {
      sims = await get('simulations')
      pipes = await get('pipelines')
    } finally {
      if (sims['msg']) return res.json({ msg: 'Simulation not found.' })
      if (pipes['msg']) return res.json({ msg: 'Pipeline not found.' })
    }
    const sim = sims[srun]
    console.log(sim)
    const pipe = pipes[sim['pipeline']]
    console.log(pipe)

    if (sim['parametersByProgram']) {
      const progId = Object.keys(sim['parametersByProgram'])[0]
      const params = sim['parametersByProgram'][progId]
      const progs = await get('programs')
      const prog = progs[progId]
      let cmd = prog['binaryPath'] + ' '
      const paramList = await get('parameters')
      for (const param of params) {
        cmd += paramList[param['parameter']]['param'] + param['value'] + ' '
      }
      sim.status = '2'
      sims[srun] = sim
      put('simulations', sims)
      console.log(cmd)
      execSync(
        `cp -r /external/pipelines/${pipe['rootDir']} /external/simulations/${srun}`
      )

      exec(
        `/external/simulations/${srun}/` + cmd,
        async (error, stdout, stderr) => {
          if (error) {
            console.log(error, stderr)
            sim.status = '4'
            sims[srun] = sim
            put('simulations', sims)
            return
          }

          sim.status = '3'
          sims[srun] = sim
          put('simulations', sims)
        }
      )

      return res.json({ launched: true })
    }

    return res.json({ launched: false })
  }
}

export { SimulationController }
