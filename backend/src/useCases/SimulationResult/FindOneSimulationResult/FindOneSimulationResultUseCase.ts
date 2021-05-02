import { ISimulationResultRepository } from '../../../repositories/ISimulationResultRepository'

export class FindOneSimulationResultUseCase {
  constructor(private simulationResultRepository: ISimulationResultRepository) {}

  async execute(id: string) {
    
  const simulationResult = await this.simulationResultRepository.findOne(id)
  
  return simulationResult
  }
}
