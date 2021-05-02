import { Request, Response } from 'express'
import { ListSimulationStatusesUseCase } from './ListSimulationStatusesUseCase'

export class ListSimulationStatusesController {
  constructor(private listSimulationStatusesUseCase: ListSimulationStatusesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const simulationStatuses = await this.listSimulationStatusesUseCase.execute()
      return response.send(simulationStatuses)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
