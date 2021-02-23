import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

const Simulation = () => {

  const router = useRouter()
  const { id } = router.query

  return (
    <Layout title="User Area | GSOP Manager">
      <h1>This is Simulation { id }</h1>


    </Layout>
  )
}


export default Simulation
