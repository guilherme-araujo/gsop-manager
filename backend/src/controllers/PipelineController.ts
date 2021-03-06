import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'
import { get, put } from '../database'

class PipelineController {
  async listAll(req: Request, res: Response) {
    const pipelines = await get('pipelines')
    return res.json(pipelines)
  }
  async findOne(req: Request, res: Response) {
    const pipelines = await get('pipelines')
    const id = req.params.id
    return res.json(pipelines[id])
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
