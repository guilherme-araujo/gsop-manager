import { SimulationStatus } from '../entities/SimulationStatus'

export interface ISimulationStatusRepository {
  listAll(): Promise<SimulationStatus[]>

  findOne(id: string): Promise<SimulationStatus>
}
