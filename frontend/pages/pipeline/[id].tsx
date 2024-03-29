import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import ProgramListInPipeline from '../../components/ProgramListInPipeline'
import { useFetch } from '../../utils/api'

const Pipeline = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useFetch(`pipeline/id/${id}`)

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/pipeline">Pipelines</Link>
      <h1>This is Pipeline {id}</h1>
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
