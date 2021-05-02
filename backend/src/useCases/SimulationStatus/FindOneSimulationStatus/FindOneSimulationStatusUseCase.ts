import { ISimulationStatusRepository } from '../../../repositories/ISimulationStatusRepository'

export class FindOneSimulationStatusUseCase {
  constructor(private simulationStatusRepository: ISimulationStatusRepository) {}

  async execute(id: string) {
    
  const simulationStatus = await this.simulationStatusRepository.findOne(id)
  
  return simulationStatus
  }
}
