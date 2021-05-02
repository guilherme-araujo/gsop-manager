import { Request, Response } from 'express'
import { CreateSimulationUseCase } from './CreateSimulationUseCase'

export class CreateSimulationController {
  constructor(private createSimulationUseCase: CreateSimulationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { pipeline, parameters, status, results } = request.body

    try {
      const newSimulationId = await this.createSimulationUseCase.execute({
        pipeline,
        parameters,
        status,
        results
      })

      return response.status(201).send({ id: newSimulationId })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
