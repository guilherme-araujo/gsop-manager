import { IPipelineRepository } from '../../../repositories/IPipelineRepository'
import { ICreatePipelineRequestDTO } from './CreatePipelineDTO'
import { Pipeline } from '../../../entities/Pipeline'

export class CreatePipelineUseCase {
  constructor(private pipelineRepository: IPipelineRepository) {}

  async execute(data: ICreatePipelineRequestDTO) {
    const pipeline = new Pipeline(data)

    await this.pipelineRepository.save(pipeline)

    return pipeline.id
  }
}
