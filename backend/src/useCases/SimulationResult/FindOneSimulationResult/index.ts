import { DBSimulationResultRepository } from "../../../repositories/leveldbimplementation/DBSimulationResultRepository"
import { FindOneSimulationResultController } from "./FindOneSimulationResultController"
import { FindOneSimulationResultUseCase } from "./FindOneSimulationResultUseCase"

const dbSimulationResultRepository = new DBSimulationResultRepository()

const findOneSimulationResultUseCase = new FindOneSimulationResultUseCase(dbSimulationResultRepository)

const findOneSimulationResultController = new FindOneSimulationResultController(findOneSimulationResultUseCase)

export { findOneSimulationResultUseCase, findOneSimulationResultController}