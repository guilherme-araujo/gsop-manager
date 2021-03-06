import { Request, Response, Router } from 'express'
import { ParameterController } from '../controllers/ParameterController'

const router = Router()
const parameterController = new ParameterController()

//return parameter list
router.get('/', parameterController.listAll)

//return parameter of a certain uuid
router.get('/id/:id', parameterController.findOne)

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
router.post('/', parameterController.new)

export default router
