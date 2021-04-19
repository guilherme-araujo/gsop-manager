import { IPipelineRepository } from '../IPipelineRepository'
import { v4 as uuid } from 'uuid'
import { get, put } from '../../database'
import { DBProgramRepository } from './DBProgramRepository'
import { Pipeline } from '../../entities/Pipeline'
import { Program } from '../../entities/Program'

export class DBPipelineRepository implements IPipelineRepository {
  private programController = new DBProgramRepository()

  async listAll(): Promise<Pipeline[]> {
    const response = await get('pipelines')
    const pipelines = new Array<Pipeline>()
    for (const key of Object.keys(response)){
      const pipeline = new Pipeline(response[key], key)
      pipelines.push(pipeline)
    }
    return pipelines
  }
  
  async findOne(id: string) {
    const pipelines = await get('pipelines')

    const pipeline = pipelines[id]
    const programObjs = {}

    for (const program of Object.keys(pipeline.programs)) {
      const programObj = (await get('programs'))[pipeline.programs[program]]
      programObjs[pipeline['programs'][program]] = programObj
    }
    pipeline['programObjs'] = programObjs

    return pipeline
  }

  async save(pipeline: Pipeline) {
    const newId = uuid()
    let idList = {}
    try {
      idList = await get('pipelines')
    } finally {
      idList = idList['err'] ? {} : idList
    }
    idList[newId] = pipeline
    await put('pipelines', idList)
    return pipeline
  }

  async linkPipelineProgram(pipeline: Pipeline, program: Program){
    const newId = uuid()
    let idList = {}
    try {
      idList = await get('pipeline-program')
    } finally {
      idList = idList['err'] ? {} : idList
    }
    idList[newId] = pipeline.id, program.id

    await put('pipeline-program', idList)
  }
}
