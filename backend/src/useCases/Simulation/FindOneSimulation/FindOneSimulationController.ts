import { Request, Response } from 'express'
import { FindOneSimulationUseCase } from './FindOneSimulationUseCase'

export class FindOneSimulationController {
  constructor(private findOneSimulationUseCase: FindOneSimulationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    
    const id = request.params.id

    try {
      const simulation = await this.findOneSimulationUseCase.execute(id)

      return response.status(201).send(simulation)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
