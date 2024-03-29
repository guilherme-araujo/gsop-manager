import { SimulationParameter } from '../entities/SimulationParameter'
import { Simulation } from '../entities/Simulation'
import { Parameter } from '../entities/Parameter'

export interface ISimulationParameterRepository {
  linkSimulationParameterSimulation(
    SimulationParameter: SimulationParameter,
    simulation: Simulation
  ): Promise<void>

  linkSimulationParameterParameter(
    SimulationParameter: SimulationParameter,
    parameter: Parameter
  ): Promise<void>
}
