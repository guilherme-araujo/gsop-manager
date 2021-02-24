import Link from 'next/link'
import Layout from '../../components/Layout'
import { useFetch } from '../../utils/api'

const Programs = () => {

  const { data } = useFetch('program')

  return (
    <Layout title="User Area | GSOP Manager">
      <h1>Programs</h1>
      { !data ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Object.keys(data).map((p, i) => {
            return (<li key={i}>{data[p].name}</li>)
          })}
        </ul>
      )}


    </Layout>
  )

}

export default Programs
