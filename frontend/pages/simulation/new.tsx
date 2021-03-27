import Link from 'next/link'
import { SyntheticEvent, useState } from 'react'
import Layout from '../../components/Layout'
import { api, useFetch } from '../../utils/api'

type ParameterValueType = {
  parameter: string
  value: string
}

type ParameterProgramType = {
  [id: string]: Array<ParameterValueType>
}

type SimulationType = {
  [id: string]: {
    name: string
    descr: string
    pipeline: string
    parametersByProgram: {
      [id: string]: ParameterProgramType
    }
  }
}

const NewSimulation = () => {
  const [created, setCreated] = useState<SimulationType | undefined>(undefined)
  const { data } = useFetch('pipeline')

  const saveSimulation = async (e: SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      name: { value: string }
      descr: { value: string }
      pipeline: { value: string }
    }
    const name = target.name.value
    const descr = target.descr.value
    const pipeline = target.pipeline.value
    const parametersByProgram: ParameterProgramType = {}

    //console.log(data[pipeline].programs[0])

    for (const prog of Object.keys(data[pipeline].programs)) {
      const paramsArray: Array<ParameterValueType> = []
      try {
        const params = await api.get(
          `parameter/program/${data[pipeline].programs[prog]}`
        )
        if (!('msg' in Object.keys(params))) {
          for (const parameter of Object.keys(params)) {
            paramsArray.push({ parameter, value: '' })
          }
        }
      } catch (err) {
      } finally {
        parametersByProgram[data[pipeline].programs[prog]] = paramsArray
      }
    }

    const res = await api.post('simulation', {
      simulation: { name, descr, pipeline, parametersByProgram },
    })
    console.log(res)
    setCreated(res.data)
  }

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/simulation">
        <a>Back to simulations</a>
      </Link>
      <h1>New Simulation</h1>
      {created ? (
        <>
          <p>Simulation created with id {Object.keys(created)[0]}</p>
          <p>Name: {created[Object.keys(created)[0]].name}</p>
          <p>Description: {created[Object.keys(created)[0]].descr}</p>
          <p>Pipeline: {created[Object.keys(created)[0]].pipeline}</p>
        </>
      ) : (
        <form onSubmit={saveSimulation}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
          <br />
          <label htmlFor="descr">Description</label>
          <input id="descr" name="descr" type="text" required />
          <br />
          <label htmlFor="pipeline">Pipeline</label>
          {data ? (
            <>
              <select id="pipeline" name="pipeline">
                <option value={''}>Choose...</option>
                {Object.keys(data).map((p, i) => (
                  <option value={p} key={i}>
                    {data[p].name}
                  </option>
                ))}
              </select>
            </>
          ) : (
            <select id="pipeline" name="pipeline">
              <option>Loading...</option>
            </select>
          )}
          <br />
          <button type="submit">Send</button>
        </form>
      )}
    </Layout>
  )
}

export default NewSimulation
