import { Router, Request, Response } from 'express'
import { get, put } from '../database'

const router = Router()

//return simulation result list
router.get('/', async (req, res) => {
  const simulationResults = await get('simulationResults')
  return res.json(simulationResults)
})

//return simulation result of a certain uuid
router.get('/id/:id', async (req, res) => {
  const simulationResults = await get('simulationResults')
  const id = req.params.id
  return res.json(simulationResults[id])
})

export default router
