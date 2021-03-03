import { Simulation } from "./Simulation";
import { Parameter } from "./Parameter";

export class SimulationParameter {
    
    public readonly id: string;

    public simulation: Simulation;
    public parameter: Parameter;
    
    constructor(props: Omit<SimulationParameter, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            //this.id = uuid();
        }
    }
}