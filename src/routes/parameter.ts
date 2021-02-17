import { Router, Request, Response } from 'express'
import { v4 as uuid } from 'uuid'
import { get, put } from '../database'

const router = Router()

//return parameter list
router.get('/', async (req, res) => {
  const parameters = await get('parameters')
  return res.json(parameters)
})

//return parameter of a certain uuid
router.get('/id/:id', async (req, res) => {
  const parameters = await get('parameters')
  const id = req.params.id
  return res.json(parameters[id])
})

/*
EXPECTED FORMAT FOR newParam:
{
  "name": String
  "descr": String
  "program": program uuid
  "param": String
  "optional": boolean
}
*/
router.post('/', async (req, res) => {
  const newParam = req.body.parameter
  const newId = uuid()
  let idList = {}
  try {
    idList = await get('parameters')
  } finally {
    idList = idList['err'] ? {} : idList
  }
  idList[newId] = newParam
  const ok = await put('parameters', idList)
  return res.status(201).json(ok[newId])
})

export default router
