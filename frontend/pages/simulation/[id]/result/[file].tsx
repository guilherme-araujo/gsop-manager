import { useRouter } from 'next/router'
import Header from '../../../../components/Header'
import Layout from '../../../../components/Layout'

const Program = () => {
  const router = useRouter()
  const { id, file } = router.query

  return (
    <Layout title="User Area | GSOP Manager">
      {id && file ? (
        <>
          <Header title={`Result image ${file}`} href={`/simulation/${id}`} link={"Back to simulation"}/>
          <img
            src={`/gsop-admin-web/api/resultdownload/${id}/${file}`}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  )
}
export default Program
