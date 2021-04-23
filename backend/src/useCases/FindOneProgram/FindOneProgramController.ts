import { Request, Response } from 'express'
import { FindOneProgramUseCase } from './FindOneProgramUseCase'

export class FindOneProgramController {
  constructor(private findOneProgramUseCase: FindOneProgramUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    
    const id = request.params.id

    try {
      const program = await this.findOneProgramUseCase.execute(id)

      return response.status(201).send(program)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.',
      })
    }
  }
}
