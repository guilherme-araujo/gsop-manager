import { DBSimulationRepository } from "../../../repositories/leveldbimplementation/DBSimulationRepository"
import { FindOneSimulationController } from "./FindOneSimulationController"
import { FindOneSimulationUseCase } from "./FindOneSimulationUseCase"

const dbSimulationRepository = new DBSimulationRepository()

const findOneSimulationUseCase = new FindOneSimulationUseCase(dbSimulationRepository)

const findOneSimulationController = new FindOneSimulationController(findOneSimulationUseCase)

export { findOneSimulationUseCase, findOneSimulationController}