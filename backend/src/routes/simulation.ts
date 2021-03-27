import { Router } from 'express'
import { SimulationController } from '../controllers/SimulationController'

const router = Router()
const simulationController = new SimulationController()

//return simulation list
router.get('/', simulationController.listAll)

//return simulation of a certain uuid
router.get('/id/:id', simulationController.findOne)

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

router.put('/id/:id', simulationController.update)

router.get('/run/:id', simulationController.run)

export default router
