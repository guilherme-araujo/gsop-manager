import { Request, Response } from 'express'
import { get } from '../database'

class SimulationResultController {
  async listAll(req: Request, res: Response) {
    const simulationResults = await get('simulationResults')
    return res.json(simulationResults)
  }
  async findOne(req: Request, res: Response) {
    const simulationResults = await get('simulationResults')
    const id = req.params.id
    return res.json(simulationResults[id])
  }
}

export { SimulationResultController }
