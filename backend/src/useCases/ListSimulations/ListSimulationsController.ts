import { Request, Response } from 'express'
import { ListSimulationsUseCase } from './ListSimulationsUseCase'

export class ListSimulationsController {
  constructor(private listSimulationsUseCase: ListSimulationsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const simulations = await this.listSimulationsUseCase.execute()
      return response.send(simulations)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
