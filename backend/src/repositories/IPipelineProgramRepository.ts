import { PipelineProgram } from '../entities/PipelineProgram'
import { Program } from '../entities/Program'
import { Pipeline } from '../entities/Pipeline'

export interface IPipelineProgramRepository {
  save(pipelineProgram: PipelineProgram): Promise<void>

  getAllPipelinePrograms(): Promise<PipelineProgram[]>

  linkPipelineProgramProgram(
    pipelineProgram: PipelineProgram,
    program: Program
  ): Promise<void>

  linkPipelineProgramPipeline(
    pipelineProgram: PipelineProgram,
    Pipeline: Pipeline
  ): Promise<void>
}
