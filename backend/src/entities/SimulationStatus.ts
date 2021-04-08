import { v4 as uuid } from 'uuid'

export class SimulationStatus {
  public readonly id: string

  public status: string

  constructor(props: Omit<SimulationStatus, 'id'>, id?: string) {
    Object.assign(this, props)
    if (!id) {
      this.id = uuid()
    } else{
      this.id = id;
    }
  }
}
