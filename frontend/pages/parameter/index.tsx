import Link from 'next/link'
import Layout from '../../components/Layout'
import { useFetch } from '../../utils/api'

const Parameter = () => {
  const { data } = useFetch('parameter')

  return (
    <Layout title="User Area | GSOP Manager">
      <h1>Parameters</h1>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <ul>
          Choose a parameter:
          {Object.keys(data).map((p, i) => {
            return (
              <li key={i}>
                {
                  // nesse link seria uma rota para edição ou para mostrar?
                }
                <Link href={`/parameter/program/${data[p].id}`}>
                  <a>{data[p].name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
      <Link href="parameter/new">New Parameter</Link>
    </Layout>
  )
}

export default Parameter
