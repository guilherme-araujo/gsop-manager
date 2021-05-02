import { IProgramRepository } from '../../../repositories/IProgramRepository'
import { ICreateProgramRequestDTO } from './CreateProgramDTO'
import { Program } from '../../../entities/Program'

export class CreateProgramUseCase {
  constructor(private programRepository: IProgramRepository) {}

  async execute(data: ICreateProgramRequestDTO) {
    const program = new Program(data)

    await this.programRepository.save(program)

    return program.id
  }
}
