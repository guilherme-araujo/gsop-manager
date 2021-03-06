import { Router } from 'express'
import { PipelineController } from '../controllers/PipelineController'

const router = Router()
const pipelineController = new PipelineController()

//return pipeline list
router.get('/', pipelineController.listAll)

//return pipeline of a certain uuid
router.get('/id/:id', pipelineController.findOne)

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
router.post('/', pipelineController.new)

export default router
