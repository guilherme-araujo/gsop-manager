import { SimulationStatus } from 'src/entities/SimulationStatus'
import { ISimulationStatusRepository } from 'src/repositories/ISimulationStatusRepository'
import { get } from '../../database'

export class DBSimulationStatusRepository implements ISimulationStatusRepository{

  async listAll(): Promise<SimulationStatus[]> {
    const response = await get('simulationStatus')
    const simulationStatuses = new Array<SimulationStatus>()
    for(const key of Object.keys(response)){
      const simulationStatus = new SimulationStatus(response[key], key)
      simulationStatuses.push(simulationStatus)
    }
    return simulationStatuses
  }

  async findOne(id: string) {
    const simulationStatus = await get('simulationStatus')
    return simulationStatus[id]
  }
}
