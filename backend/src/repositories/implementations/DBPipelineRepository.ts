import { Request, Response } from 'express'
import { IPipelineRepository } from '../IPipelineRepository'
import { v4 as uuid } from 'uuid'
import { get, put } from '../../database'
import { DBProgramRepository } from './DBProgramRepository'

export class DBPipelineRepository {
  private programController = new DBProgramRepository()
  constructor(private pipelineRepository?: IPipelineRepository) {}

  async listAll(req: Request, res: Response) {
    const pipelines = await get('pipelines')
    return res.json(pipelines)
  }
  async findOne(req: Request, res: Response) {
    const pipelines = await get('pipelines')
    const id = req.params.id

    //move this logic to the repositories later
    const pipeline = pipelines[id]
    const programObjs = {}

    for (const program of Object.keys(pipeline.programs)) {
      const programObj = (await get('programs'))[pipeline.programs[program]]
      programObjs[pipeline['programs'][program]] = programObj
    }
    pipeline['programObjs'] = programObjs

    return res.json(pipeline)
  }
  async save(req: Request, res: Response) {
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
    return res.status(201).json({ [newId]: ok[newId] })
  }
}
