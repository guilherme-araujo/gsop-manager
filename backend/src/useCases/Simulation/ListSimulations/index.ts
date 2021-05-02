import { DBSimulationRepository } from '../../../repositories/leveldbimplementation/DBSimulationRepository'
import { ListSimulationsController } from './ListSimulationsController'
import { ListSimulationsUseCase } from './ListSimulationsUseCase'

const dbSimulationRepository = new DBSimulationRepository()

const listSimulationsUseCase = new ListSimulationsUseCase(dbSimulationRepository)

const listSimulationsController = new ListSimulationsController(listSimulationsUseCase)

export { listSimulationsUseCase, listSimulationsController}
