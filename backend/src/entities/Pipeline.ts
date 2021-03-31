import { Program } from './Program'
import { v4 as uuid } from 'uuid'

export class Pipeline {
  public readonly id: string

  public name: string
  public descr: string
  public rootFolder: string
  public programs: Program[] = []

  constructor(props: Omit<Pipeline, 'id' | 'programs'>, id?: string) {
    Object.assign(this, props)
    if (!id) {
      this.id = uuid()
    }
  }
}
