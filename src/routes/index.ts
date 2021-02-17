import { Router, Request, Response } from 'express'
import { get, put } from '../database'

const router = Router()

router.get('/', async (req, res) => {
  const ok = await get('testdata')
  res.json(ok)
})

export default router
