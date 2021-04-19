import { SimulationResult } from "src/entities/SimulationResult";
import { ISimulationResultRepository } from "src/repositories/ISimulationResultRepository";

export class ListSimulationResultsUseCase {
    constructor(private simulationResultRepository : ISimulationResultRepository) {}

    async execute(): Promise<SimulationResult[]> {
        return this.simulationResultRepository.listAll();
    }
} 