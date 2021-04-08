import { DBProgramRepository } from 'src/repositories/implementations/DBProgramRepository'
import { ListProgramsUseCase } from './ListProgramsUseCase'

const dbProgramRepository = new DBProgramRepository()

const listProgramsUseCase = new ListProgramsUseCase(dbProgramRepository)
