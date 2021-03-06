import { Request, Response } from 'express'
import { get } from '../database'

class SimulationStatusController {
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

export { SimulationStatusController }
