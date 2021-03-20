import Link from 'next/link'
import { SyntheticEvent, useState } from 'react'
import Layout from '../../components/Layout'
import { api } from '../../utils/api'

type PipelineType = {
  [id: string]: {
    name: string
    descr: string
    programs: Program[]
  }
}

type Program = {
  [order: number]: {
    name: string
    descr: string
    program: string
    param: string
    optional: boolean
  }
}

/*
EXPECTED FORMAT FOR newPipeline:
{
  "name": String
  "descr": String
  "programs": {
    "1": "uuid of program 1",
    "2": "uuid of program 2"
  }
}
*/

const NewPipeline = () => {
  const [created, setCreated] = useState<PipelineType | undefined>(undefined)

  const savePipeline = async (e: SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      name: { value: string }
      descr: { value: string }
      programs: { value: Array<Program> }
    }
    const name = target.name.value
    const descr = target.descr.value
    const programs = target.programs.value

    const res = await api.post('pipeline', {
      program: { name, descr, programs },
    })
    console.log(res)
    setCreated(res.data)
  }

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/pipeline">
        <a>Back to pipelines</a>
      </Link>
      <h1>New Pipeline</h1>
      {created ? (
        <>
          <p>Program created with id {Object.keys(created)[0]}</p>
          <p>Name: {created[Object.keys(created)[0]].name}</p>
          <p>Description: {created[Object.keys(created)[0]].descr}</p>
          <p>Programs: {created[Object.keys(created)[0]].programs}</p>
        </>
      ) : (
        <form onSubmit={savePipeline}>
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

export default NewPipeline
