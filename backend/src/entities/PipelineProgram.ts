import { Program } from './Program'
import { Pipeline } from './Pipeline'
import { v4 as uuid } from 'uuid'

export class PipelineProgram {
  public readonly id: string

  public order: number
  public program: Program
  public pipeline: Pipeline

  constructor(props: Omit<PipelineProgram, 'id'>, id?: string) {
    Object.assign(this, props)
    if (!id) {
      this.id = uuid()
    } else{
      this.id = id;
    }
  }
}
