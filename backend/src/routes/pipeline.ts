import { Router, Request, Response } from 'express'
import { v4 as uuid } from 'uuid'
import { get, put } from '../database'

const router = Router()

//return pipeline list
router.get('/', async (req, res) => {
  const pipelines = await get('pipelines')
  return res.json(pipelines)
})

//return pipeline of a certain uuid
router.get('/id/:id', async (req, res) => {
  const pipelines = await get('pipelines')
  const id = req.params.id
  return res.json(pipelines[id])
})

/*
EXPECTED FORMAT FOR newPipeline:
{
  "name": String
  "descr": String
  "programs": {
    "1": "uuid of program 1",
    "2": "uuid of program 2"
  }
}
*/
router.post('/', async (req, res) => {
  const newPipeline = req.body.pipeline
  const newId = uuid()
  let idList = {}
  try {
    idList = await get('pipelines')
  } finally {
    idList = idList['err'] ? {} : idList
  }
  idList[newId] = newPipeline
  const ok = await put('pipelines', idList)
  return res.status(201).json(ok[newId])
})

export default router
