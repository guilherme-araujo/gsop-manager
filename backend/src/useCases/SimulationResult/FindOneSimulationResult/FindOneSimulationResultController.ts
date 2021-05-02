import { Request, Response } from 'express'
import { FindOneSimulationResultUseCase } from './FindOneSimulationResultUseCase'

export class FindOneSimulationResultController {
  constructor(private findOneSimulationResultUseCase: FindOneSimulationResultUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    
    const id = request.params.id

    try {
      const simulationResult = await this.findOneSimulationResultUseCase.execute(id)

      return response.status(201).send(simulationResult)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
