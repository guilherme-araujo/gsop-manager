import { Request, Response, Router } from 'express'
import { listParametersController } from '../useCases/ListParameters'
import { ParameterController } from '../controllers/ParameterController'
import { createParameterController } from '../useCases/CreateParameter'
import { findParameterByProgramController } from '../useCases/FindParameterByProgram'

const router = Router()
const parameterController = new ParameterController()

//return parameter list
router.get('/', parameterController.listAll)

router.get('/v2', (request, response) => {
  listParametersController.handle(request, response)
})

//return parameter of a certain uuid
router.get('/id/:id', parameterController.findOne)

router.get('/program/:programid', parameterController.findByProgram)

router.get('/v2/program/:programid', (request, response) => {
  findParameterByProgramController.handle(request, response)
})

/*
EXPECTED FORMAT FOR newParam:
{
  "name": String
  "descr": String
  "program": program uuid
  "param": String
  "optional": boolean
}
*/

router.post('/', parameterController.save)

router.post('/v2', (request, response) => {
  createParameterController.handle(request, response)
})

export default router
