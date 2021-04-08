import { DBProgramRepository } from 'src/repositories/leveldbimplementation/DBProgramRepository'
import { ListProgramsController } from './ListProgramsController'
import { ListProgramsUseCase } from './ListProgramsUseCase'

const dbProgramRepository = new DBProgramRepository()

const listProgramsUseCase = new ListProgramsUseCase(dbProgramRepository)

const listProgramsController = new ListProgramsController(listProgramsUseCase)

export { listProgramsUseCase, listProgramsController}
