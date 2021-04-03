import Link from 'next/link'
import { useFetch } from '../../utils/api'

type Props = {
  simulationId: string | string[]
}

export default function SimulationResultList({ simulationId }: Props) {
  const { data } = useFetch(`simulation/results/${simulationId}`)
  console.log(data)
  if (!data) {
    return <p>Loading...</p>
  } else if (data['msg']) {
    return <p>No results found.</p>
  } else {
    return (
      <>
        <p>Results:</p>
        <ul>
          {data.map((fileName: string, i: string) => {
            if (
              fileName.split('.')[1] === 'jpg' ||
              fileName.split('.')[1] === 'png'
            ) {
              return (
                <li key={i}>
                  <Link href={`/simulation/${simulationId}/result/${fileName}`}>
                    <a>{fileName}</a>
                  </Link>
                </li>
              )
            } else {
              return (
                <li key={i}>
                  <Link
                    href={`/api/resultdownload/${simulationId}/${fileName}`}
                  >
                    <a>{fileName}</a>
                  </Link>
                </li>
              )
            }
          })}
        </ul>
      </>
    )
  }
}
