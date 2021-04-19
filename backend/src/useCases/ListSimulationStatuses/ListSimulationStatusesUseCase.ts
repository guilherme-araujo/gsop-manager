import { SimulationStatus } from "src/entities/SimulationStatus";
import { ISimulationStatusRepository } from "src/repositories/ISimulationStatusRepository";

export class ListSimulationStatusesUseCase {
    constructor(private simulationStatusRepository : ISimulationStatusRepository) {}

    async execute(): Promise<SimulationStatus[]> {
        return this.simulationStatusRepository.listAll();
    }
} 