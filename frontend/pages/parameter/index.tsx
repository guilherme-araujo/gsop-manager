import Link from 'next/link'
import Layout from '../../components/Layout'
import { useFetch } from '../../utils/api'

const Parameter = () => {
  const { data } = useFetch('program')

  return (
    <Layout title="User Area | GSOP Manager">
      <h1>Parameters</h1>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <ul>
          Choose a program:
          {Object.keys(data).map((p, i) => {
            return (
              <li key={i}>
                <Link href={`/parameter/${p}`}>
                  <a>{data[p].name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </Layout>
  )
}

export default Parameter
