import { DBPipelineRepository } from '../../../repositories/leveldbimplementation/DBPipelineRepository'
import { ListPipelinesController } from './ListPipelinesController'
import { ListPipelinesUseCase } from './ListPipelinesUseCase'

const dbPipelineRepository = new DBPipelineRepository()

const listPipelinesUseCase = new ListPipelinesUseCase(dbPipelineRepository)

const listPipelinesController = new ListPipelinesController(listPipelinesUseCase)

export { listPipelinesUseCase, listPipelinesController}
