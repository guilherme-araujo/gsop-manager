import { SyntheticEvent } from 'react'

interface props {
  save: (e: SyntheticEvent) => Promise<void>
  name: string
  descr: string
  children: React.ReactChild
}

export default function ProgramForm(props: props) {
  return (
    <form onSubmit={props.save}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" required />
      <br />
      <label htmlFor="descr">Description</label>
      <input id="descr" name="descr" type="text" required />
      <br />
      {props.children}
      <button type="submit">Send</button>
    </form>
  )
}
