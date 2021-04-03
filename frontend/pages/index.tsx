import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | GSOP Manager">
    <h1>Graph Simulation Manager</h1>
    <p>
      <Link href="/userarea">
        <a>Enter</a>
      </Link>
    </p>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
