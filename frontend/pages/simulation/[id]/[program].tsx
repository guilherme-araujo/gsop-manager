import Link from 'next/link'
import { useRouter } from 'next/router'
import { SyntheticEvent, useState } from 'react'
import Layout from '../../../components/Layout'
import ParameterConfig from '../../../components/ParameterConfig'
import { api, useFetch } from '../../../utils/api'

type ParameterValues = {
  parameter: string
  value: string
}

const Simulation = () => {
  const router = useRouter()
  const [updated, setUpdated] = useState(false)
  const { id, program } = router.query
  const { data: simulationData } = useFetch(`simulation/id/${id}`)
  const { data: programData } = useFetch(`program/id/${program}`)

  const updateSimulation = async (e: SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      [param: string]: { value: string }
    }
    for (const param of simulationData.parametersByProgram[
      `${program}`
    ].keys()) {
      simulationData.parametersByProgram[`${program}`][param].value =
        target[param].value
    }
    //console.log(id, simulationData)
    await api.put(`simulation/id/${id}`, {
      simulation: simulationData,
    })
    setUpdated(true)
  }

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/simulation">Simulations</Link>
      <h1>This is Simulation {id}</h1>
      <Link href={`/simulation/${id}`}>Back to simulation</Link>
      {!programData ? (
        <p>Loading...</p>
      ) : (
        <p>Parameters for program: {programData.name} </p>
      )}
      {!simulationData ? (
        <p>Loading...</p>
      ) : (
        <>
          {simulationData.parametersByProgram[`${program}`].length > 0 ? (
            <form onSubmit={updateSimulation}>
              {simulationData.parametersByProgram[`${program}`].map(
                (pvalue: ParameterValues, idx: number) => (
                  <ParameterConfig
                    parameterValue={{ pvalue, idx, updated }}
                    key={idx}
                  />
                )
              )}
              {simulationData.status !== '1' ? (
                <button type="submit" disabled>
                  Update
                </button>
              ) : (
                <button type="submit">Update</button>
              )}
            </form>
          ) : (
            <p>No parameters configured for this program.</p>
          )}
        </>
      )}
      {updated ? <p>Updated successfully!</p> : <></>}
    </Layout>
  )
}

export default Simulation
