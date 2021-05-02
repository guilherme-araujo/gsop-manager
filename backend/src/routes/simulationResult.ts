import { Router } from 'express'
import { SimulationResultController } from '../controllers/SimulationResultController'
import { listSimulationResultsController } from '../useCases/SimulationResult/ListSimulationResults'
import { findOneSimulationResultController } from '../useCases/SimulationResult/FindOneSimulationResult'

const router = Router()
const simulationResultController = new SimulationResultController()

//return simulation result list
router.get('/', simulationResultController.listAll)

router.get('/v2', (request, response) => {
    listSimulationResultsController.handle(request, response)
})

//return simulation result of a certain uuid
router.get('/id/:id', simulationResultController.findOne)

router.get('/v2/id/:id', (request, response) => {
    findOneSimulationResultController.handle(request, response)
})

export default router
