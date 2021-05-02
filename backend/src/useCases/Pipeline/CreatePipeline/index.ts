import { DBPipelineRepository } from "../../../repositories/leveldbimplementation/DBPipelineRepository"
import { CreatePipelineController } from "./CreatePipelineController"
import { CreatePipelineUseCase } from "./CreatePipelineUseCase"


const dbPipelineRepository = new DBPipelineRepository()

const createPipelineUseCase = new CreatePipelineUseCase(dbPipelineRepository)

const createPipelineController = new CreatePipelineController(createPipelineUseCase)

export { createPipelineUseCase, createPipelineController}
