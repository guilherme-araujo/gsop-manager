import Link from 'next/link'
import { useRouter } from 'next/router'
import { SyntheticEvent, useState } from 'react'
import Layout from '../../../components/Layout'
import { api, useFetch } from '../../../utils/api'

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

  const router = useRouter()
  const { programId } = router.query
  const { data: program } = useFetch(`program/id/${programId}`)

  const saveParameter = async (e: SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      name: { value: string }
      descr: { value: string }
      param: { value: string }
      optional: { checked: boolean }
    }
    const name = target.name.value
    const descr = target.descr.value
    const program = programId
    const param = target.param.value
    const optional = target.optional.checked

    const res = await api.post('parameter', {
      parameter: { name, descr, program, param, optional },
    })
    setCreated(res.data)
  }

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/parameter">
        <a>Back to parameters</a>
      </Link>
      {program ? (
        <h1>New Parameter for program {program.name}</h1>
      ) : (
        <h1>New Parameter for program ...</h1>
      )}

      {created ? (
        <>
          <p>Parameter created with id: {Object.keys(created)[0]}</p>
          <p>Name: {created[Object.keys(created)[0]].name}</p>
          <p>Description: {created[Object.keys(created)[0]].descr}</p>
          <p>Program: {created[Object.keys(created)[0]].program}</p>
          <p>Param: {created[Object.keys(created)[0]].param}</p>
          <p>
            Optional: {created[Object.keys(created)[0]].optional.toString()}
          </p>
        </>
      ) : (
        <form onSubmit={saveParameter}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
          <br />
          <label htmlFor="descr">Description</label>
          <input id="descr" name="descr" type="text" />
          <br />
          <label htmlFor="param">Param</label>
          <input id="param" name="param" type="text" required />
          <br />
          <label htmlFor="optional">Optional</label>
          <input id="optional" name="optional" type="checkbox" defaultChecked />
          <br />
          <button type="submit">Send</button>
        </form>
      )}
    </Layout>
  )
}

export default NewParameter
