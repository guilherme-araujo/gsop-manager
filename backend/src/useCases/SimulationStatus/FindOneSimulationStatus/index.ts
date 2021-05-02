import { DBSimulationStatusRepository } from "../../../repositories/leveldbimplementation/DBSimulationStatusRepository"
import { FindOneSimulationStatusController } from "./FindOneSimulationStatusController"
import { FindOneSimulationStatusUseCase } from "./FindOneSimulationStatusUseCase"

const dbSimulationStatusRepository = new DBSimulationStatusRepository()

const findOneSimulationStatusUseCase = new FindOneSimulationStatusUseCase(dbSimulationStatusRepository)

const findOneSimulationStatusController = new FindOneSimulationStatusController(findOneSimulationStatusUseCase)

export { findOneSimulationStatusUseCase, findOneSimulationStatusController}