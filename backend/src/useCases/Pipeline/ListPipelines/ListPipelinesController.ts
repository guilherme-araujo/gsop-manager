import { Request, Response } from 'express'
import { ListPipelinesUseCase } from './ListPipelinesUseCase'

export class ListPipelinesController {
  constructor(private listPipelinesUseCase: ListPipelinesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const pipelines = await this.listPipelinesUseCase.execute()
      return response.send(pipelines)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
