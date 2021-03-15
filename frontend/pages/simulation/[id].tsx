import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ParameterConfigList from '../../components/ParameterConfigList'
import SimulationStatus from '../../components/SimulationStatus'
import { useFetch } from '../../utils/api'

const Simulation = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useFetch(`simulation/id/${id}`)

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/simulation">Simulations</Link>
      <h1>This is Simulation {id}</h1>
      {!data || !id ? (
        <p>Loading...</p>
      ) : (
        <>
          <SimulationStatus status={data.status} />
          <p>Name: {data.name} </p>
          <p>Descriptions: {data.descr} </p>
          <p>Pipeline: {data.pipeline} </p>
          <p>Configure parameters: </p>
          <ParameterConfigList
            parametersByProgram={data.parametersByProgram}
            simulation={id}
          />
          <button>Start now</button>
          <p>Results: None yet</p>
        </>
      )}
    </Layout>
  )
}

export default Simulation
