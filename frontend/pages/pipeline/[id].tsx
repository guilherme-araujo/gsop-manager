import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import ProgramListInPipeline from '../../components/ProgramListInPipeline'
import { useFetch } from '../../utils/api'

const Pipeline = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useFetch(`pipeline/id/${id}`)

  return (
    <Layout title="User Area | GSOP Manager">
      <Header title={`This is Pipeline ${id}`} link={"Pipelines"} href={"/pipeline"}/>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Name: {data.name} </p>
          <p>Description: {data.descr} </p>
          <p>Programs:</p>
          <ul>
            <ProgramListInPipeline pipeline={data} />
          </ul>
        </>
      )}
    </Layout>
  )
}

export default Pipeline
