import { SimulationResult } from '../entities/SimulationResult'
import { Simulation } from '../entities/Simulation'

export interface ISimulationResultRepository {
  listAll(): Promise<SimulationResult[]>

  findOne(id: string): Promise<SimulationResult>

  linkSimulationResultSimulation(
    SimulationResult: SimulationResult,
    simulation: Simulation
  ): Promise<void>
}
