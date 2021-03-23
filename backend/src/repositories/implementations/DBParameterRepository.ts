import { Request, Response } from 'express'
import { IParameterRepository } from '../IParameterRepository'
import { v4 as uuid } from 'uuid'
import { get, put } from '../../database'

//export class DBParameterRepository implements IParameterRepository {
export class DBParameterRepository {
  constructor(private parameterRepository?: IParameterRepository) {}

  async listAll(req: Request, res: Response) {
    const parameters = await get('parameters')
    return res.json(parameters)
  }

  async findOne(req: Request, res: Response) {
    const parameters = await get('parameters')
    const id = req.params.id
    return res.json(parameters[id])
  }

  async findByProgram(req: Request, res: Response) {
    const programid = req.params.programid

    //move this logic to the repository later
    const parameters = await get('parameters')
    const filteredParams = {}
    Object.keys(parameters).forEach((param, i) => {
      if (parameters[param].program === programid) {
        filteredParams[param] = parameters[param]
      }
    })

    if (Object.keys(filteredParams).length > 0) {
      return res.json(filteredParams)
    } else {
      return res.status(400).json({ msg: 'No parameters for this programId.' })
    }
    throw new Error('Method not implemented.')
  }

  async save(req: Request, res: Response) {
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
    return res.status(201).json({ [newId]: ok[newId] })
  }
}