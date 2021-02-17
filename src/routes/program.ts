import { Router, Request, Response } from 'express'
import { v4 as uuid } from 'uuid'
import { get, put } from '../database'

const router = Router()

//return program list
router.get('/', async (req, res) => {
  const programs = await get('programs')
  return res.json(programs)
})

//return program of a certain uuid
router.get('/id/:id', async (req, res) => {
  const programs = await get('programs')
  const id = req.params.id
  return res.json(programs[id])
})

/*
EXPECTED FORMAT FOR newProgram:
{
  "name": String
  "descr": String
  "binaryPath": String
}
*/
router.post('/', async (req, res) => {
  const newProgram = req.body.program
  const newId = uuid()
  let idList = {}
  try {
    idList = await get('programs')
  } finally {
    idList = idList['err'] ? {} : idList
  }
  idList[newId] = newProgram
  const ok = await put('programs', idList)
  return res.status(201).json(ok[newId])
})

export default router
