import { DBParameterRepository } from '../../../repositories/leveldbimplementation/DBParameterRepository'
import { ListParametersController } from './ListParametersController'
import { ListParametersUseCase } from './ListParametersUseCase'

const dbParameterRepository = new DBParameterRepository()

const listParametersUseCase = new ListParametersUseCase(dbParameterRepository)

const listParametersController = new ListParametersController(listParametersUseCase)

export { listParametersUseCase, listParametersController}
