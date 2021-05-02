import { IParameterRepository } from '../../../repositories/IParameterRepository'

export class FindOneParameterUseCase {
  constructor(private parameterRepository: IParameterRepository) {}

  async execute(id: string) {
    
  const parameter = await this.parameterRepository.findOne(id)
  
  return parameter
  }
}
