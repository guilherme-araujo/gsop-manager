import { Simulation } from "src/entities/Simulation";
import { ISimulationRepository } from "src/repositories/ISimulationRepository";

export class ListSimulationsUseCase {
    constructor(private simulationRepository : ISimulationRepository) {}

    async execute(): Promise<Simulation[]> {
        return this.simulationRepository.listAll();
    }
} 