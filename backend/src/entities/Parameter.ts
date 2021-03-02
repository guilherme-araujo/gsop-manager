import { Program } from "./Program";

export class Parameter {
    
    public readonly id: string;

    public name: string;
    public descr: string;
    public program: Program;
    public param: string;
    public optional: boolean;
    
    constructor(props: Omit<Parameter, 'id'>, id?: string) {
        Object.assign(this, props);
        if (!id) {
            //this.id = uuid();
        }
    }
}