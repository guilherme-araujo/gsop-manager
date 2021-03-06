import { Program } from './Program'
import { Pipeline } from './Pipeline'

export class PipelineProgram {
  public readonly id: string

  public order: number
  public program: Program
  public pipeline: Pipeline

  constructor(props: Omit<PipelineProgram, 'id'>, id?: string) {
    Object.assign(this, props)
    if (!id) {
      //this.id = uuid();
    }
  }
}
