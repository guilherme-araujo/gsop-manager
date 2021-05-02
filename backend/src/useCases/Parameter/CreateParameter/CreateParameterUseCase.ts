import { IParameterRepository } from '../../../repositories/IParameterRepository'
import { ICreateParameterRequestDTO } from './CreateParameterDTO'
import { Parameter } from '../../../entities/Parameter'

export class CreateParameterUseCase {
  constructor(private parameterRepository: IParameterRepository) {}

  async execute(data: ICreateParameterRequestDTO) {
    const parameter = new Parameter(data)

    await this.parameterRepository.save(parameter)

    return parameter.id
  }
}
