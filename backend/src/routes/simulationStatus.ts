import { Router } from 'express'
import { SimulationStatusController } from '../controllers/SimulationStatusController'
import { listSimulationStatusesController } from '../useCases/SimulationStatus/ListSimulationStatuses'
import { findOneSimulationStatusController } from '../useCases/SimulationStatus/FindOneSimulationStatus'

const router = Router()
const simulationStatusController = new SimulationStatusController()

//return simulation status list
router.get('/', simulationStatusController.listAll)

router.get('/v2', (request, response) => {
    listSimulationStatusesController.handle(request, response)
})

//return simulation result of a certain uuid
router.get('/id/:id', simulationStatusController.findOne)

router.get('/v2/id/:id', (request, response) => {
    findOneSimulationStatusController.handle(request, response)
})

router.get('/init', simulationStatusController.init)

export default router
