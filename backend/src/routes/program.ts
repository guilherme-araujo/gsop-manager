import { Router } from 'express'
import { listProgramsController } from '../useCases/ListPrograms'
import { ProgramController } from '../controllers/ProgramController'
import { findOneProgramController } from '../useCases/FindOneProgram'

const router = Router()
const programController = new ProgramController()

//return program list
router.get('/', programController.listAll)

router.get('/v2', (request, response) => {
  listProgramsController.handle(request, response);
})

//return program of a certain uuid
router.get('/id/:id', programController.findOne)

router.get('/v2/:id',  (request, response) => {
  findOneProgramController.handle(request, response);
})

/*
EXPECTED FORMAT FOR newProgram:
{
  "name": String
  "descr": String
  "binaryPath": String
}
*/
router.post('/', programController.save)

export default router
