import Link from 'next/link'
import { SyntheticEvent, useState } from 'react'
import Layout from '../../components/Layout'
import { api } from '../../utils/api'

type ParameterType = {
  [id: string]: {
    name: string
    descr: string
    program: string
    param: string
    optional: boolean
  }
}

const NewParameter = () => {
  const [created, setCreated] = useState<ParameterType | undefined>(undefined)

  const saveParameter = async (e: SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      name: { value: string }
      descr: { value: string }
      program: { value: string }
      param: { value: string }
      optional: { value: boolean }
    }
    const name = target.name.value
    const descr = target.descr.value
    const program = target.program.value
    const param = target.param.value
    const optional = target.optional.value

    const res = await api.post('parameter', {
      parameter: { name, descr, program, param, optional },
    })
    console.log(res)
    setCreated(res.data)
  }

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/parameter">
        <a>Back to parameters</a>
      </Link>
      <h1>New Parameter</h1>
      {created ? (
        <>
          <p>Parameter created with id: {Object.keys(created)[0]}</p>
          <p>Name: {created[Object.keys(created)[0]].name}</p>
          <p>Description: {created[Object.keys(created)[0]].descr}</p>
          <p>Program: {created[Object.keys(created)[0]].program}</p>
          <p>Param: {created[Object.keys(created)[0]].param}</p>
          <p>Optional: {created[Object.keys(created)[0]].optional}</p>
        </>
      ) : (
        <form onSubmit={saveParameter}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
          <br />
          <label htmlFor="descr">Description</label>
          <input id="descr" name="descr" type="text"/>
          <br />
          <label htmlFor="program">Program's Id</label>
          <input id="program" name="program" type="text" required />
          <br />
          <label htmlFor="param">Param</label>
          <input id="param" name="param" type="text" required />
          <br />
          <label htmlFor="optional">Optional</label>
          <input id="optional" name="optional" type="text" required />
          <br />
          <button type="submit">Send</button>
        </form>
    )}
    </Layout>
  )
}

export default NewParameter