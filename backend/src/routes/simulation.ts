import { Router, Request, Response } from 'express'
import { v4 as uuid } from 'uuid'
import { get, put } from '../database'

const router = Router()

//return simulation list
router.get('/', async (req: Request, res: Response) => {
  const simulations = await get('simulations')
  return res.json(simulations)
})

//return simulation of a certain uuid
router.get('/id/:id', async (req: Request, res: Response) => {
  const simulations = await get('simulations')
  const id = req.params.id
  return res.json(simulations[id])
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
router.post('/', async (req: Request, res: Response) => {
  const newSimulation = req.body.simulation
  const newId = uuid()
  let idList = {}
  try {
    idList = await get('simulations')
  } finally {
    idList = idList['err'] ? {} : idList
  }
  idList[newId] = newSimulation
  const ok = await put('simulations', idList)
  return res.status(201).json({ [newId]: ok[newId] })
})

export default router
