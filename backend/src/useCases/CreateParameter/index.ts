import { DBParameterRepository } from "../../repositories/leveldbimplementation/DBParameterRepository"
import { CreateParameterController } from "./CreateParameterController"
import { CreateParameterUseCase } from "./CreateParameterUseCase"


const dbParameterRepository = new DBParameterRepository()

const createParameterUseCase = new CreateParameterUseCase(dbParameterRepository)

const createParameterController = new CreateParameterController(createParameterUseCase)

export { createParameterUseCase, createParameterController}
