import { DBSimulationStatusRepository } from '../../../repositories/leveldbimplementation/DBSimulationStatusRepository'
import { ListSimulationStatusesController } from './ListSimulationStatusesController'
import { ListSimulationStatusesUseCase } from './ListSimulationStatusesUseCase'

const dbSimulationStatusRepository = new DBSimulationStatusRepository()

const listSimulationStatusesUseCase = new ListSimulationStatusesUseCase(dbSimulationStatusRepository)

const listSimulationStatusesController = new ListSimulationStatusesController(listSimulationStatusesUseCase)

export { listSimulationStatusesUseCase, listSimulationStatusesController}
