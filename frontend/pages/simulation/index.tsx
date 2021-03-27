import Link from 'next/link'
import Layout from '../../components/Layout'
import { useFetch } from '../../utils/api'

const Simulations = () => {
  const { data } = useFetch('simulation')

  return (
    <Layout title="User Area | GSOP Manager">
      <h1>Simulations</h1>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Object.keys(data).map((p, i) => {
            return (
              <li key={i}>
                <Link href={`/simulation/${p}`}>
                  <a> {data[p].name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
      <Link href="/simulation/new">
        <a>New simulation</a>
      </Link>
    </Layout>
  )
}

export default Simulations
