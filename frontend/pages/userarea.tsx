import Link from 'next/link'
import Layout from '../components/Layout'

const UserArea = () => (
  <Layout title="User Area | GSOP Manager">
    <h1>Welcome, User</h1>
    <p>
      <Link href="/program">
        <a>Programs</a>
      </Link>
    </p>
    <p>
      <Link href="/parameter">
        <a>Parameters</a>
      </Link>
    </p>
    <p>
      <Link href="/pipeline">
        <a>Pipelines</a>
      </Link>
    </p>
    <p>
      <Link href="/simulation">
        <a>Simulations</a>
      </Link>
    </p>
  </Layout>
)

export default UserArea
