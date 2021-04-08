import { Program } from "src/entities/Program";
import { IProgramRepository } from "src/repositories/IProgramRepository";

export class ListProgramsUseCase {
    constructor(private programRepository : IProgramRepository) {}

    async execute(): Promise<Program[]> {
        return this.programRepository.listAll();
    }
} 