import { Request, Response } from 'express'
import { IPipelineRepository } from '../repositories/IPipelineRepository'
import { v4 as uuid } from 'uuid'
import { get, put } from '../database'
import { ProgramController } from './ProgramController'

class PipelineController {
  private programController = new ProgramController()
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
    const programs = {}

    for (const program of Object.keys(pipeline.programs)) {
      const programObj = (await get('programs'))[pipeline.programs[program]]
      pipeline.programs[program] = { [pipeline.programs[program]]: programObj }
    }

    return res.json(pipeline)
  }
  async new(req: Request, res: Response) {
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

export { PipelineController }
