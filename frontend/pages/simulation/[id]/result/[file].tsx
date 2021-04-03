import Link from 'next/link'
import Image from 'next/image'
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
          <Image
            src={`http://localhost:3000/api/resultdownload/${id}/${file}`}
            alt={`${file}`}
            width={1200}
            height={800}
          ></Image>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  )
}

export default Program
