import { Router } from 'express'
import { SimulationResultController } from '../controllers/SimulationResultController'

const router = Router()
const simulationResultController = new SimulationResultController()

//return simulation result list
router.get('/', simulationResultController.listAll)

//return simulation result of a certain uuid
router.get('/id/:id', simulationResultController.findOne)

export default router
