import Link from 'next/link'
import { SyntheticEvent, useState } from 'react'
import Layout from '../../components/Layout'
import { api, useFetch } from '../../utils/api'

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
  const [programsList, setProgramsList] = useState<Array<string>>([])
  const [selectedProgram, setSelectedProgram] = useState('')
  const { data } = useFetch('program')

  const savePipeline = async (e: SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      name: { value: string }
      descr: { value: string }
    }
    const name = target.name.value
    const descr = target.descr.value
    const programs = programsList

    /*const res = await api.post('pipeline', {
      program: { name, descr, programs },
    })*/
    console.log({ name, descr, programs })
    //setCreated(res.data)
  }

  const chooseProgram = (e: SyntheticEvent) => {
    //e.preventDefault()
    const target = e.target as typeof e.target & {
      value: string
    }
    console.log(target.value)
    setSelectedProgram(target.value)
  }

  const addProgram = () => {
    const lst = programsList
    console.log(selectedProgram)
    lst.push(selectedProgram)
    setProgramsList(lst)
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
          <label htmlFor="file">
            Programs
            {data ? (
              <>
                <select onChange={chooseProgram}>
                  {Object.keys(data).map((p, i) => (
                    <option value={p} key={i}>
                      {data[p].name}
                    </option>
                  ))}
                </select>
                <button onClick={() => addProgram()}>Add</button>
              </>
            ) : (
              <select>
                <option>Loading...</option>
              </select>
            )}
          </label>
          <br />

          <p>Chosen programs:</p>
          {programsList.length === 0 ? (
            <p>None yet</p>
          ) : (
            <ul>
              {programsList.map((p, i) => (
                <li key={i}>{data[p].name}</li>
              ))}
            </ul>
          )}
          <br />
          <button type="submit">Send</button>
        </form>
      )}
    </Layout>
  )
}

export default NewPipeline
