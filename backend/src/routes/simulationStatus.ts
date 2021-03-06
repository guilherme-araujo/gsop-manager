import { Router, Request, Response } from 'express'
import { get, put } from '../database'

const router = Router()

//return simulation status list
router.get('/', async (req: Request, res: Response) => {
  const simulationStatus = await get('simulationStatus')
  return res.json(simulationStatus)
})

//return simulation result of a certain uuid
router.get('/id/:id', async (req: Request, res: Response) => {
  const simulationStatus = await get('simulationStatus')
  const id = req.params.id
  return res.json(simulationStatus[id])
})

export default router
