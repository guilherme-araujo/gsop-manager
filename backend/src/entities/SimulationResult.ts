import { Simulation } from './Simulation'

export class SimulationResult {
  public readonly id: string

  public filename: string
  public simulation: Simulation

  constructor(props: Omit<SimulationResult, 'id'>, id?: string) {
    Object.assign(this, props)
    if (!id) {
      //this.id = uuid();
    }
  }
}
