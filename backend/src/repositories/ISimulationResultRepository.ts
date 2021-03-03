import { SimulationResult } from "../entities/SimulationResult";
import { Simulation } from "../entities/Simulation";

export interface ISimulationResultRepository {
    save(simulationResult: SimulationResult): Promise<void>;
    getAllSimulationResults(): Promise<SimulationResult[]>;
    linkSimulationResultSimulation(SimulationResult: SimulationResult, simulation: Simulation):Promise<void>;
}