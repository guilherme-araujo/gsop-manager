import Link from 'next/link'
import { SyntheticEvent, useState } from 'react'
import Layout from '../../components/Layout'
import { api } from '../../utils/api'

type ProgramType = {
  [id: string]: {
    name: string
    descr: string
    binaryPath: string
  }
}

const NewProgram = () => {
  const [created, setCreated] = useState<ProgramType | undefined>(undefined)

  const saveProgram = async (e: SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      name: { value: string }
      descr: { value: string }
      file: { value: string }
    }
    const name = target.name.value
    const descr = target.descr.value
    const binaryPath = target.file.value

    const res = await api.post('program', {
      program: { name, descr, binaryPath },
    })
    setCreated(res.data)
  }

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/program">
        <a>Back to programs</a>
      </Link>
      <h1>New Program</h1>
      {created ? (
        <>
          <p>Program created with id {Object.keys(created)[0]}</p>
          <p>Name: {created[Object.keys(created)[0]].name}</p>
          <p>Description: {created[Object.keys(created)[0]].descr}</p>
          <p>File path: {created[Object.keys(created)[0]].binaryPath}</p>
        </>
      ) : (
        <form onSubmit={saveProgram}>
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
      )}
    </Layout>
  )
}

export default NewProgram
