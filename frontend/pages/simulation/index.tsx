import Link from 'next/link'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import { useFetch } from '../../utils/api'

const Simulations = () => {
  const { data } = useFetch('simulation')

  return (
    <Layout title="User Area | GSOP Manager">
      <Header title={"Simulation"} href={""} link={""} />
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
