import { SyntheticEvent } from 'react'
import Form from '../Form'

interface props {
  save: (e: SyntheticEvent) => Promise<void>
}

export default function ParameterForm(props: props) {
  return (
    <Form save={props.save} name={''} descr={''}>
      <div>
        <label htmlFor="param">Param</label>
        <input id="param" name="param" type="text" required />
        <br />
        <label htmlFor="optional">Optional</label>
        <input id="optional" name="optional" type="checkbox" defaultChecked />
      </div>
    </Form>
  )
}
