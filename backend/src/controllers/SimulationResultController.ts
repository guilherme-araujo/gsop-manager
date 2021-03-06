import { Request, Response } from 'express'
import { ISimulationResultRepository } from '../repositories/ISimulationResultRepository'
import { get } from '../database'

class SimulationResultController {
  private simulationResultRepository: ISimulationResultRepository

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
