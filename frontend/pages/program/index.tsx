import Link from 'next/link'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import { useFetch } from '../../utils/api'

const Programs = () => {
  const { data } = useFetch('program')

  return (
    <Layout title="User Area | GSOP Manager">
      <Header title={"Programs"} link={""} href={""}/>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Object.keys(data).map((p, i) => {
            return (
              <li key={i}>
                <Link href={`/program/${p}`}>
                  <a> {data[p].name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
      <Link href="/program/new">
        <a>New program</a>
      </Link>
    </Layout>
  )
}

export default Programs
