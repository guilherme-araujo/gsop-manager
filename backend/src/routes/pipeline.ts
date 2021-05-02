import { Router } from 'express'
import { PipelineController } from '../controllers/PipelineController'
import { createPipelineController } from '../useCases/Pipeline/CreatePipeline'
import { listPipelinesController } from '../useCases/Pipeline/ListPipelines'
import { findOnePipelineController } from '../useCases/Pipeline/FindOnePipeline'

const router = Router()
const pipelineController = new PipelineController()

//return pipeline list
router.get('/', pipelineController.listAll)

router.get('/v2', (request, response) => {
  listPipelinesController.handle(request, response)
})

//return pipeline of a certain uuid
router.get('/id/:id', pipelineController.findOne)

router.get('/v2/id/:id', (request, response) => {
  findOnePipelineController.handle(request, response)
})

/*
EXPECTED FORMAT FOR newPipeline:
{
  "name": String
  "descr": String
  "programs": {
    "1": "uuid of program 1",
    "2": "uuid of program 2"
  }
}
*/
router.post('/', pipelineController.save)

router.post('/v2', (request, response) => {
  createPipelineController.handle(request, response)
})

export default router
