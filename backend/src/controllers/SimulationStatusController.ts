import { Request, Response } from 'express'
import { ISimulationStatusRepository } from 'src/repositories/ISimulationStatusRepository'
import { get, put } from '../database'

class SimulationStatusController {
  constructor(
    private simulationStatusRepository?: ISimulationStatusRepository
  ) {}

  async listAll(req: Request, res: Response) {
    const simulationStatus = await get('simulationStatus')
    return res.json(simulationStatus)
  }

  async findOne(req: Request, res: Response) {
    const simulationStatus = await get('simulationStatus')
    const id = req.params.id
    return res.json(simulationStatus[id])
  }

  async init(req: Request, res: Response) {
    const result = await put(
      'simulationStatus',
      JSON.stringify({
        1: 'Pending',
        2: 'Started',
        3: 'Finished',
        4: 'Failed',
      })
    )
    return res.json(result)
  }
}

export { SimulationStatusController }
