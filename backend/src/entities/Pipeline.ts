import { Program } from "./Program";

export class Pipeline {
    
    public readonly id: string;

    public name: string;
    public descr: string;
    public programs: Program[] = [];
    
    constructor(props: Omit<Pipeline, 'id'|'programs'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            //this.id = uuid();
        }
    }
}