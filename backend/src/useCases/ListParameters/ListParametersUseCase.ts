import { Parameter } from "src/entities/Parameter";
import { IParameterRepository } from "src/repositories/IParameterRepository";

export class ListParametersUseCase {
    constructor(private parameterRepository : IParameterRepository) {}

    async execute(): Promise<Parameter[]> {
        return this.parameterRepository.listAll();
    }
} 