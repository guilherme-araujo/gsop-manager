import { Router } from 'express'
import { SimulationStatusController } from '../controllers/SimulationStatusController'

const router = Router()
const simulationStatusController = new SimulationStatusController()

//return simulation status list
router.get('/', simulationStatusController.listAll)

//return simulation result of a certain uuid
router.get('/id/:id', simulationStatusController.findOne)

router.get('/init', simulationStatusController.init)

export default router
