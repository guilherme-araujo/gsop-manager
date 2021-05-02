import { Request, Response } from 'express'
import { FindOneParameterUseCase } from './FindOneParameterUseCase'

export class FindOneParameterController {
  constructor(private findOneParameterUseCase: FindOneParameterUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    
    const id = request.params.id

    try {
      const parameter = await this.findOneParameterUseCase.execute(id)

      return response.status(201).send(parameter)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
