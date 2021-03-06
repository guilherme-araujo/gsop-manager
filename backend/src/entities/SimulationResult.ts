import { Simulation } from './Simulation'
import { v4 as uuid } from 'uuid'

export class SimulationResult {
  public readonly id: string

  public filename: string
  public simulation: Simulation

  constructor(props: Omit<SimulationResult, 'id'>, id?: string) {
    Object.assign(this, props)
    if (!id) {
      this.id = uuid()
    }
  }
}
