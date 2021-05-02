import { IPipelineRepository } from '../../../repositories/IPipelineRepository'

export class FindOnePipelineUseCase {
  constructor(private pipelineRepository: IPipelineRepository) {}

  async execute(id: string) {
    
  const pipeline = await this.pipelineRepository.findOne(id)
  
  return pipeline
  }
}
