import { Pipeline } from '../entities/Pipeline'
import { Program } from '../entities/Program'

export interface IPipelineRepository {
  listAll(): Promise<Pipeline[]>

  findOne(id: string): Promise<Pipeline>

  save(pipeline: Pipeline): Promise<Pipeline>

  linkPipelineProgram(pipeline: Pipeline, program: Program): Promise<void>
}
