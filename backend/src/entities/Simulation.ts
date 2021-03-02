import { Pipeline } from "./Pipeline"
import { Parameter } from "./Parameter"
import { SimulationResult } from "./SimulationResult"
import { SimulationStatus } from "./SimulationStatus";

export class Simulation {
    
    public readonly id: string;

    public pipeline: Pipeline;
    public parameters: Parameter[] = [];
    public status: SimulationStatus;
    public results: SimulationResult[] = [];
    
    constructor(props: Omit<Simulation, 'id'|'parameters'|'results'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            //this.id = uuid();
        }
    }
}