import { Request, Response } from 'express'
import { IProgramRepository } from '../../repositories/IProgramRepository'
import { v4 as uuid } from 'uuid'
import { get, put } from '../../database'

export class DBProgramRepository {
  constructor(private programRepository?: IProgramRepository) {}

  async listAll(req: Request, res: Response) {
    const programs = await get('programs')
    return res.json(programs)
  }

  async findOne(req: Request, res: Response) {
    const programs = await get('programs')
    const id = req.params.id
    return res.json(programs[id])
  }

  async save(req: Request, res: Response) {
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
    return res.status(201).json({ [newId]: ok[newId] })
  }
}
