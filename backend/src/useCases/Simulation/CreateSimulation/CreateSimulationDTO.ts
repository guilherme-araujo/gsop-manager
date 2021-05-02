import { Pipeline } from '../../../entities/Pipeline'
import { Parameter } from '../../../entities/Parameter'
import { SimulationResult } from '../../../entities/SimulationResult'
import { SimulationStatus } from '../../../entities/SimulationStatus'

export interface ICreateSimulationRequestDTO {
   pipeline: Pipeline
   parameters: Parameter[]
   status: SimulationStatus
   results: SimulationResult[]
}
