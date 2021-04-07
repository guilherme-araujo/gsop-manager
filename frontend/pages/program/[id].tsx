import { useRouter } from 'next/router'
import Header from '../../components/Header';
import Layout from '../../components/Layout'
import { useFetch } from '../../utils/api'

const Program = () => {
  const router = useRouter()
  const { id } = router.query
  const { data } = useFetch(`program/id/${id}`)

  return (
    <Layout title="User Area | GSOP Manager">
      <Header title={`This is Program ${id}`} link={"Programs"} href={"/program"}/>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Name: {data.name} </p>
          <p>Description: {data.descr} </p>
          <p>Filesystem path: {data.binaryPath} </p>
        </>
      )}
    </Layout>
  )
}

export default Program
