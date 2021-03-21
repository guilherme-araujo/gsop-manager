import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'
import ParamsByProgramList from '../../../components/ParamsByProgramList'
import { useFetch } from '../../../utils/api'

const ParametersByProgram = () => {
  const router = useRouter()
  const { programId } = router.query
  const { data: paramList, error } = useFetch(`parameter/program/${programId}`)
  const { data: program } = useFetch(`program/id/${programId}`)

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/parameter">Back to parameters</Link>
      {(!paramList && !error) || !program ? (
        <>
          <h1>Parameters of ...</h1>
          <p>Loading...</p>
        </>
      ) : (
        <>
          <h1>Parameters of {program.name}</h1>
          <ParamsByProgramList parameterList={paramList} />
        </>
      )}
      {programId ? (
        <Link href={`/parameter/new/${programId}`}>
          <a>New parameter</a>
        </Link>
      ) : (
        <a>New parameter</a>
      )}
    </Layout>
  )
}

export default ParametersByProgram
