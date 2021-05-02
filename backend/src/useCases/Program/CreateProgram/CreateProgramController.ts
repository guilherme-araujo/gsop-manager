import { Request, Response } from 'express'
import { CreateProgramUseCase } from './CreateProgramUseCase'

export class CreateProgramController {
  constructor(private createProgramUseCase: CreateProgramUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, descr, binaryPath } = request.body

    try {
      const newProgramId = await this.createProgramUseCase.execute({
        name,
        descr,
        binaryPath
      })

      return response.status(201).send({ id: newProgramId })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
