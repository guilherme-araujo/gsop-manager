import { Pipeline } from '../entities/Pipeline'
import { Program } from '../entities/Program'

export interface IPipelineRepository {
  save(pipeline: Pipeline): Promise<void>
  getAllPipelines(): Promise<Pipeline[]>
  linkPipelineProgram(pipeline: Pipeline, program: Program): Promise<void>
}
