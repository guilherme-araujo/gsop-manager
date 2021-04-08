import { Program } from './Program'
import { v4 as uuid } from 'uuid'

export class Parameter {
  public readonly id: string

  public name: string
  public descr: string
  public program: Program
  public param: string
  public optional: boolean

  constructor(props: Omit<Parameter, 'id'>, id?: string) {
    Object.assign(this, props)
    if (!id) {
      this.id = uuid()
    } else{
      this.id = id;
    }
  }
}
