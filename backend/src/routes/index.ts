import { Router, Request, Response } from 'express'
import { get, put } from '../database'
import parameterRoutes from './parameter'
import programRoutes from './program'
import pipelineRoutes from './pipeline'
import simulationRoutes from './simulation'
import simulationResultsRoutes from './simulationResult'
import simulationStatusRoutes from './simulationStatus'

const router = Router()

router.get('/', async (req, res) => {
  const ok = await get('testdata')
  res.json(ok)
})

router.use('/parameter', parameterRoutes)
router.use('/program', programRoutes)
router.use('/pipeline', pipelineRoutes)
router.use('/simulation', simulationRoutes)
router.use('/simulationResult', simulationResultsRoutes)
router.use('/simulationStatus', simulationStatusRoutes)

export default router
