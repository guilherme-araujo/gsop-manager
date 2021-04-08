import { Request, Response } from 'express'
import { ListProgramsUseCase } from './ListProgramsUseCase'

export class ListProgramsController {
  constructor(private listProgramsUseCase: ListProgramsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const programs = await this.listProgramsUseCase.execute()
      return response.send(programs)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
