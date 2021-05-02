import { DBProgramRepository } from "../../../repositories/leveldbimplementation/DBProgramRepository"
import { FindOneProgramController } from "./FindOneProgramController"
import { FindOneProgramUseCase } from "./FindOneProgramUseCase"

const dbProgramRepository = new DBProgramRepository()

const findOneProgramUseCase = new FindOneProgramUseCase(dbProgramRepository)

const findOneProgramController = new FindOneProgramController(findOneProgramUseCase)

export { findOneProgramUseCase, findOneProgramController}