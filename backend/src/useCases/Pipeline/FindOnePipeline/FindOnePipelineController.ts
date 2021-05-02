import { Request, Response } from 'express'
import { FindOnePipelineUseCase } from './FindOnePipelineUseCase'

export class FindOnePipelineController {
  constructor(private findOnePipelineUseCase: FindOnePipelineUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    
    const id = request.params.id

    try {
      const pipeline = await this.findOnePipelineUseCase.execute(id)

      return response.status(201).send(pipeline)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
