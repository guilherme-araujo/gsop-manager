import { Router } from 'express'
import { SimulationController } from '../controllers/SimulationController'
import { createSimulationController } from '../useCases/Simulation/CreateSimulation'
import { listSimulationsController } from '../useCases/Simulation/ListSimulations'
import { findOneSimulationController } from '../useCases/Simulation/FindOneSimulation'

const router = Router()
const simulationController = new SimulationController()

//return simulation list
router.get('/', simulationController.listAll)

router.get('/v2', (request, response) => {
  listSimulationsController.handle(request, response)
})

//return simulation of a certain uuid
router.get('/id/:id', simulationController.findOne)

router.get('/v2/id/:id', (request, response) => {
  findOneSimulationController.handle(request, response)
})

/*
EXPECTED FORMAT FOR newSimulation:
{
  "pipeline": uuid of pipeline,
  "name": name of simulation,
  "descr": description of simulation
  "parameters": {
    "1": {
      "parameter": uuid of parameter,
      "value": value passed to parameter
    },
    "2": {
      "parameter": uuid of parameter,
      "value": value passed to parameter
    }
  },
  "status": uuid of simulationStatus
}
*/
router.post('/', simulationController.save)

router.post('/v2', (request, response) => {
  createSimulationController.handle(request, response)
})

router.put('/id/:id', simulationController.update)

router.get('/run/:id', simulationController.run)

router.get('/reset/:id', simulationController.reset)

router.get('/results/:id', simulationController.resultList)

router.get('/resultdownload/:id/:filename', simulationController.resultDownload)

export default router
