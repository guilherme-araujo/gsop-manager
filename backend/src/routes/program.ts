import { Router } from 'express'
import { ProgramController } from '../controllers/ProgramController'

const router = Router()
const programController = new ProgramController()

//return program list
router.get('/', programController.listAll)

//return program of a certain uuid
router.get('/id/:id', programController.findOne)

/*
EXPECTED FORMAT FOR newProgram:
{
  "name": String
  "descr": String
  "binaryPath": String
}
*/
router.post('/', programController.new)

export default router
