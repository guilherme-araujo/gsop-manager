import { DBSimulationRepository } from "../../../repositories/leveldbimplementation/DBSimulationRepository"
import { CreateSimulationController } from "./CreateSimulationController"
import { CreateSimulationUseCase } from "./CreateSimulationUseCase"


const dbSimulationRepository = new DBSimulationRepository()

const createSimulationUseCase = new CreateSimulationUseCase(dbSimulationRepository)

const createSimulationController = new CreateSimulationController(createSimulationUseCase)

export { createSimulationUseCase, createSimulationController}
