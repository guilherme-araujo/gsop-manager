import { SimulationStatus } from "../entities/SimulationStatus";

export interface ISimulationStatusRepository {
    save(simulationStatus: SimulationStatus): Promise<void>;
    getAllSimulationStatus(): Promise<SimulationStatus[]>;
}