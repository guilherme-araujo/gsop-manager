import { DBProgramRepository } from "../../../repositories/leveldbimplementation/DBProgramRepository"
import { CreateProgramController } from "./CreateProgramController"
import { CreateProgramUseCase } from "./CreateProgramUseCase"


const dbProgramRepository = new DBProgramRepository()

const createProgramUseCase = new CreateProgramUseCase(dbProgramRepository)

const createProgramController = new CreateProgramController(createProgramUseCase)

export { createProgramUseCase, createProgramController}
