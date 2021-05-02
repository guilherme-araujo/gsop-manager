import { DBParameterRepository } from '../../../repositories/leveldbimplementation/DBParameterRepository'
import { FindParameterByProgramController } from './FindParameterByProgramController'
import { FindParameterByProgramUseCase } from './FindParameterByProgramUseCase'

const dbParameterRepository = new DBParameterRepository()

const findParameterByProgramUseCase = new FindParameterByProgramUseCase(dbParameterRepository)

const findParameterByProgramController = new FindParameterByProgramController(findParameterByProgramUseCase)

export { findParameterByProgramUseCase, findParameterByProgramController}
