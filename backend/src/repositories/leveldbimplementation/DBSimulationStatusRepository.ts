import { ISimulationStatusRepository } from 'src/repositories/ISimulationStatusRepository'
import { get } from '../../database'

export class SimulationStatusController implements ISimulationStatusRepository{

  async listAll() {
    const simulationStatus = await get('simulationStatus')
    return simulationStatus
  }

  async findOne(id: string) {
    const simulationStatus = await get('simulationStatus')
    return simulationStatus[id]
  }
}
