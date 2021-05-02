import { ISimulationRepository } from '../../../repositories/ISimulationRepository'
import { ICreateSimulationRequestDTO } from './CreateSimulationDTO'
import { Simulation } from '../../../entities/Simulation'

export class CreateSimulationUseCase {
  constructor(private simulationRepository: ISimulationRepository) {}

  async execute(data: ICreateSimulationRequestDTO) {
    const simulation = new Simulation(data)

    await this.simulationRepository.save(simulation)

    return simulation.id
  }
}
