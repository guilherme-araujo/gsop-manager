import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import ParameterConfig from '../../../components/ParameterConfig'
import { useFetch } from '../../../utils/api'

type ParameterValues = {
  parameter: string
  value: string
}

const Simulation = () => {
  const router = useRouter()
  const { id, program } = router.query
  const { data: simulationData } = useFetch(`simulation/id/${id}`)
  const { data: programData } = useFetch(`program/id/${program}`)

  console.log(simulationData, programData)

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
          {simulationData.parametersByProgram[`${program}`].map(
            (pvalue: ParameterValues, i: number) => (
              <ParameterConfig parameterValue={pvalue} key={i} />
            )
          )}
        </>
      )}
    </Layout>
  )
}

export default Simulation
