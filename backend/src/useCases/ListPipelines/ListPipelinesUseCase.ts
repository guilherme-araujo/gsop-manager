import { Pipeline } from "src/entities/Pipeline";
import { IPipelineRepository } from "src/repositories/IPipelineRepository";

export class ListPipelinesUseCase {
    constructor(private pipelineRepository : IPipelineRepository) {}

    async execute(): Promise<Pipeline[]> {
        return this.pipelineRepository.listAll();
    }
} 