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

      const paramList = await get('parameters')

      sim.status = '2'
      sims[srun] = sim
      put('simulations', sims)
      const errorList = []

      const runPipe = async () => {
        try {
          execSync(
            `cp -r /external/pipelines/${pipe['rootDir']} /external/simulations/${srun}`
          )
        } catch (err) {
          errorList.push(err)
        }
        console.log('progs', progs)
        for (const progId of Object.keys(sim['parametersByProgram'])) {
          let cmd = ''
          const prog = progs[progId]
          console.log(progId, prog)
          cmd += prog['binaryPath'] + ' '
          for (const param of params) {
            cmd += paramList[param['parameter']]['param'] + param['value'] + ' '
          }
          console.log(cmd)
          try {
            const output = execSync(
              `cd /external/simulations/${srun}/ && ./` + cmd
            ).toString()
          } catch (err) {
            errorList.push(err)
            break
          }
        }

        if (errorList.length > 0) {
          sim.status = '4'
          sims[srun] = sim
          put('simulations', sims)
        } else {
          sim.status = '3'
          sims[srun] = sim
          put('simulations', sims)
        }
      }

      runPipe()

      return res.json({ launched: true })
    }

    return res.json({ launched: false })
  }
}

export { SimulationController }
