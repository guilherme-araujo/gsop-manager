import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import ParameterConfigList from '../../components/ParameterConfigList'
import SimulationResultList from '../../components/SimulationResultList'
import SimulationStatus from '../../components/SimulationStatus'
import { SingleSimulationType } from '../../types/types'
import { api } from '../../utils/api'

const Simulation = () => {
  const router = useRouter()
  const { id } = router.query
  const [simData, setSimData] = useState<SingleSimulationType | undefined>(
    undefined
  )
  const [launchFailed, setLaunchFailed] = useState(false)
  const [launched, setLaunched] = useState(false)
  const [updateSim, setUpdateSim] = useState(false)

  const startSimulation = async () => {
    const res = await api.get(`simulation/run/${id}`)
    if (res.data['launched'] === false) {
      setLaunchFailed(true)
    }
    const updatedData = (await api.get(`simulation/id/${id}`)).data
    setSimData({
      status: updatedData.status,
      name: updatedData.name,
      descr: updatedData.descr,
      pipeline: updatedData.pipeline,
      parametersByProgram: updatedData.parametersByProgram,
    })
    setLaunched(true)
    setUpdateSim(true)
  }

  useEffect(() => {
    const simData = api.get(`simulation/id/${id}`)
    console.log('chamou 1')
    simData.then((sim) => {
      console.log(sim)
      if (sim.data.status === '2') {
        setUpdateSim(true)
      }
      setSimData(sim.data)
    })
    if (updateSim) {
      setTimeout(() => {
        setUpdateSim(false)
      }, 2000)
    }
  }, [launched, launchFailed, id, updateSim])

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/simulation">Simulations</Link>
      <h1>This is Simulation {id}</h1>
      {!simData || !id ? (
        <p>Loading...</p>
      ) : (
        <>
          <SimulationStatus status={simData.status} />
          <p>Name: {simData.name} </p>
          <p>Descriptions: {simData.descr} </p>
          <p>Pipeline: {simData.pipeline} </p>
          <p>Configure parameters: </p>
          <ParameterConfigList
            parametersByProgram={simData.parametersByProgram}
            simulation={id}
          />
          {simData.status === '1' && launched === false ? (
            <button onClick={() => startSimulation()}>Start now</button>
          ) : (
            <button disabled>Launched</button>
          )}
          {launchFailed ? <p>Launch failed.</p> : <></>}

          {simData.status !== '3' ? (
            <p>Results: None yet</p>
          ) : (
            <SimulationResultList simulationId={id} />
          )}
        </>
      )}
    </Layout>
  )
}

export default Simulation
