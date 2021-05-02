import { DBPipelineRepository } from "../../../repositories/leveldbimplementation/DBPipelineRepository"
import { FindOnePipelineController } from "./FindOnePipelineController"
import { FindOnePipelineUseCase } from "./FindOnePipelineUseCase"

const dbPipelineRepository = new DBPipelineRepository()

const findOnePipelineUseCase = new FindOnePipelineUseCase(dbPipelineRepository)

const findOnePipelineController = new FindOnePipelineController(findOnePipelineUseCase)

export { findOnePipelineUseCase, findOnePipelineController}