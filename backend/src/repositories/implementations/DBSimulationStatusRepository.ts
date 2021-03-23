import { Request, Response } from 'express'
import { ISimulationStatusRepository } from 'src/repositories/ISimulationStatusRepository'
import { get } from '../../database'

export class SimulationStatusController {
  constructor(private simulationStatusRepository?: ISimulationStatusRepository) {}

  async listAll(req: Request, res: Response) {
    const simulationStatus = await get('simulationStatus')
    return res.json(simulationStatus)
  }

  async findOne(req: Request, res: Response) {
    const simulationStatus = await get('simulationStatus')
    const id = req.params.id
    return res.json(simulationStatus[id])
  }
}
