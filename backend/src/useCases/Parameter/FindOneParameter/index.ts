import { DBParameterRepository } from "../../../repositories/leveldbimplementation/DBParameterRepository"
import { FindOneParameterController } from "./FindOneParameterController"
import { FindOneParameterUseCase } from "./FindOneParameterUseCase"

const dbParameterRepository = new DBParameterRepository()

const findOneParameterUseCase = new FindOneParameterUseCase(dbParameterRepository)

const findOneParameterController = new FindOneParameterController(findOneParameterUseCase)

export { findOneParameterUseCase, findOneParameterController}