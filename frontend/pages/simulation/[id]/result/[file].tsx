import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'

const Program = () => {
  const router = useRouter()
  const { id, file } = router.query

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/program">Programs</Link>
      <h1>This is Program {id}</h1>
      <p>{id + ` - ` + file}</p>
    </Layout>
  )
}

export default Program
