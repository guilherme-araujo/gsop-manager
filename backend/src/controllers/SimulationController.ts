import { Request, Response } from 'express'
import { get, put } from '../database'
import { v4 as uuid } from 'uuid'
import { ISimulationRepository } from '../repositories/ISimulationRepository'

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
}

export { SimulationController }
