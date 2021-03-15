import { Simulation } from '../entities/Simulation'
import { Pipeline } from '../entities/Pipeline'
import { Parameter } from '../entities/Parameter'
import { SimulationResult } from '../entities/SimulationResult'
import { SimulationStatus } from '../entities/SimulationStatus'

export interface ISimulationRepository {
  listAll(): Promise<Simulation[]>

  findOne(id: string): Promise<Simulation>

  save(simulation: Simulation): Promise<Simulation>

  linkSimulationPipeline(
    simulation: Simulation,
    pipeline: Pipeline
  ): Promise<void>

  linkSimulationParameter(
    simulation: Simulation,
    parameter: Parameter
  ): Promise<void>

  linkSimulationSimulationResult(
    simulation: Simulation,
    simulationResult: SimulationResult
  ): Promise<void>

  linkSimulationSimulationStatus(
    simulation: Simulation,
    simulationStatus: SimulationStatus
  ): Promise<void>
}
