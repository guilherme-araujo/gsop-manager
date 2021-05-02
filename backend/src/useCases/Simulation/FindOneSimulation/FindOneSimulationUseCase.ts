import { ISimulationRepository } from '../../../repositories/ISimulationRepository'

export class FindOneSimulationUseCase {
  constructor(private simulationRepository: ISimulationRepository) {}

  async execute(id: string) {
    
  const simulation = await this.simulationRepository.findOne(id)
  
  return simulation
  }
}
