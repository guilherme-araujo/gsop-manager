import { Parameter } from '../../../entities/Parameter';
import { IParameterRepository } from '../../../repositories/IParameterRepository'

export class FindParameterByProgramUseCase {
    constructor(private parameterRepository: IParameterRepository) {}
    
    async execute(program: string): Promise<Parameter[]> {
        return this.parameterRepository.findByProgram(program);
    }
}