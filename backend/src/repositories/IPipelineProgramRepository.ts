import { PipelineProgram } from '../entities/PipelineProgram'
import { Program } from '../entities/Program'
import { Pipeline } from '../entities/Pipeline'

export interface IPipelineProgramRepository {
  linkPipelineProgramProgram(
    pipelineProgram: PipelineProgram,
    program: Program
  ): Promise<void>

  linkPipelineProgramPipeline(
    pipelineProgram: PipelineProgram,
    Pipeline: Pipeline
  ): Promise<void>
}
