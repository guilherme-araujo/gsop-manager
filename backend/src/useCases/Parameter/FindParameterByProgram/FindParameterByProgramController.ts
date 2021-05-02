import { Request, Response } from 'express'
import { FindParameterByProgramUseCase } from './FindParameterByProgramUseCase'

export class FindParameterByProgramController {
  constructor(
    private findParameterByProgramUseCase: FindParameterByProgramUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const programid = request.params.programid

    try {
      const parameters = await this.findParameterByProgramUseCase.execute(
        programid
      )
      console.log(parameters)
      return response.send(parameters)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
