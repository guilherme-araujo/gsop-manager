import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'

const Program = () => {
  const router = useRouter()
  const { id, file } = router.query

  return (
    <Layout title="User Area | GSOP Manager">
      {id && file ? (
        <>
          <Link href={`/simulation/${id}`}>Back to simulation</Link>
          <h1>Result image {file}</h1>

          <img
            src={`http://localhost:3001/gsop-admin-web/api/resultdownload/${id}/${file}`}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  )
}

export default Program
