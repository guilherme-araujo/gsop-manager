import { Request, Response } from 'express'
import { ListParametersUseCase } from './ListParametersUseCase'

export class ListParametersController {
  constructor(private listParametersUseCase: ListParametersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const parameters = await this.listParametersUseCase.execute()
      console.log(parameters)
      return response.send(parameters)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
