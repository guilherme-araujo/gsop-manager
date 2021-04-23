import { Request, Response } from 'express'
import { CreateParameterUseCase } from './CreateParameterUseCase'

export class CreateParameterController {
  constructor(private createParameterUseCase: CreateParameterUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, descr, program, param, optional } = request.body

    try {
      const newParameterId = await this.createParameterUseCase.execute({
        name,
        descr,
        program,
        param,
        optional,
      })

      return response.status(201).send({ id: newParameterId })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
