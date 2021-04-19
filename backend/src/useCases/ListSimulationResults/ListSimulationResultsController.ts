import { Request, Response } from 'express'
import { ListSimulationResultsUseCase } from './ListSimulationResultsUseCase'

export class ListSimulationResultsController {
  constructor(private listSimulationResultsUseCase: ListSimulationResultsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const simulationResults = await this.listSimulationResultsUseCase.execute()
      return response.send(simulationResults)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
