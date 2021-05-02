import { IProgramRepository } from '../../../repositories/IProgramRepository'

export class FindOneProgramUseCase {
  constructor(private programRepository: IProgramRepository) {}

  async execute(id: string) {
    
  const program = await this.programRepository.findOne(id)
  
  return program
  }
}
