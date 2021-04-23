import { SyntheticEvent } from 'react'
import Form from '../Form'

interface props {
  save: (e: SyntheticEvent) => Promise<void>
}

export default function ProgramForm(props: props) {
  return (
    <Form save={props.save} name={''} descr={''}>
      <div>
        <label htmlFor="file">File path</label>
        <input id="file" name="file" type="text" required />
        <br />
      </div>
    </Form>
  )
}
