import Link from 'next/link'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import { useFetch } from '../../utils/api'

const Parameter = () => {
  const { data } = useFetch('program')

  return (
    <Layout title="User Area | GSOP Manager">
      <Header title={"Parameters"} link={""} href={""}/>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <ul>
          Choose a program:
          {Object.keys(data).map((p, i) => {
            return (
              <li key={i}>
                <Link href={`/parameter/program/${p}`}>
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
