import { Request, Response } from 'express'
import { get, put } from '../../database'
import { v4 as uuid } from 'uuid'
import { ISimulationRepository } from '../../repositories/ISimulationRepository'
import { exec } from 'child_process'

export class DBSimulationRepository {
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

  async save(req: Request, res: Response) {
    const newSimulation = req.body.simulation
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
    try {
      sims = await get('simulations')
    } finally {
      if (sims['msg']) return res.json({ msg: 'Simulation not found.' })
    }
    //console.log(sims)
    const sim = sims[srun]

    if (sim['parametersByProgram']) {
      const progId = Object.keys(sim['parametersByProgram'])[0]
      //console.log(progId)
      const params = sim['parametersByProgram'][progId]
      //console.log(params)
      const progs = await get('programs')
      //console.log(progs)
      const prog = progs[progId]
      //console.log(prog)
      let cmd = prog['binaryPath'] + ' '
      const paramList = await get('parameters')
      for (const param of params) {
        cmd += paramList[param['parameter']]['param'] + param['value'] + ' '
      }
      console.log(cmd)
      sim.status = '2'
      sims[srun] = sim
      put('simulations', sims)
      exec(cmd, (error, stdout, stderr) => {
        console.log({ error, stdout, stderr })
        if (error) {
          sim.status = '4'
          sims[srun] = sim
          put('simulations', sims)
          return
        }

        sim.status = '3'
        sims[srun] = sim
        put('simulations', sims)
      })

      return res.json({ launched: true })
    }

    //exec('')

    return res.json({ launched: false })
  }
}
