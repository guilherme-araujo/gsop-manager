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
          {data.map((fileName: string, i: string) => (
            <li key={i}>{fileName}</li>
          ))}
        </ul>
      </>
    )
  }
}
