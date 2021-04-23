import Form from '../Form'
import { SyntheticEvent } from 'react'

interface props {
  save: (e: SyntheticEvent) => Promise<void>
  addProgram: (e: SyntheticEvent) => void
  chooseProgram: (e: SyntheticEvent) => void
  programList: Array<string>
  data: any
}

export default function PipelineForm(props: props) {
  return (
    <Form save={props.save} name={''} descr={''}>
      <div>
        <label htmlFor="rootDir">Root directory</label>
        <input id="rootDir" name="rootDir" type="text" required />
        <br />
        <label htmlFor="program">
          Programs
          {props.data ? (
            <>
              <select name="program" onChange={props.chooseProgram}>
                <option value={''}>Choose...</option>
                {Object.keys(props.data).map((p, i) => (
                  <option value={p} key={i}>
                    {props.data[p].name}
                  </option>
                ))}
              </select>
              <button type="button" onClick={() => props.addProgram}>
                Add
              </button>
            </>
          ) : (
            <select name="program">
              <option>Loading...</option>
            </select>
          )}
        </label>
        <br />

        <p>Chosen programs:</p>
        {props.programList.length === 0 ? (
          <p>None yet</p>
        ) : (
          <ul>
            {props.programList.map((p, i) => (
              <li key={i}>{props.data[p].name}</li>
            ))}
          </ul>
        )}
      </div>
    </Form>
  )
}
