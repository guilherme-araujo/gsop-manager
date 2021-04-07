import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from '../../../components/Header'
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
      {(!paramList && !error) || !program ? (
        <>
          <Header title={"Parameters of ..."} href={"/parameter"} link={"Back to parameters"}/>
          <p>Loading...</p>
        </>
      ) : (
        <>
          <Header title={`Parameters of ${program.name}`} href={"/parameter"} link={"Back to parameters"}/>
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
