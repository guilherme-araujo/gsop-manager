import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const Program = () => {

  const router = useRouter()
  const { id } = router.query

  return (
    <Layout title="User Area | GSOP Manager">
      <h1>This is Program { id }</h1>


    </Layout>
  )
}


export default Program
