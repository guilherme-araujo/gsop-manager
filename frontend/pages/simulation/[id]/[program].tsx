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
  const { data } = useFetch(`simulation/id/${id}`)
  const { data: programData } = useFetch(`program/id/${program}`)

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/simulation">Simulations</Link>
      <h1>This is Simulation {id}</h1>
      {!data || !programData ? (
        <p>Loading...</p>
      ) : (
        <>
          <Link href={`/simulation/${id}`}>Back to simulation</Link>
          <p>Parameters for program: {programData.name} </p>
          {data.parametersByProgram[`${program}`].map(
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