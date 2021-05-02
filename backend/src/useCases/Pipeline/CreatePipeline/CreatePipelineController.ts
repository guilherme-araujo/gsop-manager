import { Request, Response } from 'express'
import { CreatePipelineUseCase } from './CreatePipelineUseCase'

export class CreatePipelineController {
  constructor(private createPipelineUseCase: CreatePipelineUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, descr, rootFolder, programs,} = request.body

    try {
      const newPipelineId = await this.createPipelineUseCase.execute({
        name,
        descr,
        rootFolder,
        programs,
      })

      return response.status(201).send({ id: newPipelineId })
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
