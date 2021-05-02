import { DBSimulationResultRepository } from '../../../repositories/leveldbimplementation/DBSimulationResultRepository'
import { ListSimulationResultsController } from './ListSimulationResultsController'
import { ListSimulationResultsUseCase } from './ListSimulationResultsUseCase'

const dbSimulationResultRepository = new DBSimulationResultRepository()

const listSimulationResultsUseCase = new ListSimulationResultsUseCase(dbSimulationResultRepository)

const listSimulationResultsController = new ListSimulationResultsController(listSimulationResultsUseCase)

export { listSimulationResultsUseCase, listSimulationResultsController}
