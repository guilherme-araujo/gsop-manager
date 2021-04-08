import { SyntheticEvent } from "react";

interface props {
    save: (e:SyntheticEvent) => Promise<void>;
    name: string;
    descr: string;
    binarypath: string;
}

export default function Form(props: props){
    
    return (
        <form onSubmit={props.save}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required />
        <br />
        <label htmlFor="descr">Description</label>
        <input id="descr" name="descr" type="text" required />
        <br />
        <label htmlFor="file">File path</label>
        <input id="file" name="file" type="text" required />
        <br />
        <button type="submit">Send</button>
        </form>
    )
    
}