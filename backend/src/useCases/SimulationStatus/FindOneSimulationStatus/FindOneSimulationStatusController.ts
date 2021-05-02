import { Request, Response } from 'express'
import { FindOneSimulationStatusUseCase } from './FindOneSimulationStatusUseCase'

export class FindOneSimulationStatusController {
  constructor(private findOneSimulationStatusUseCase: FindOneSimulationStatusUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    
    const id = request.params.id

    try {
      const simulationStatus = await this.findOneSimulationStatusUseCase.execute(id)

      return response.status(201).send(simulationStatus)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
