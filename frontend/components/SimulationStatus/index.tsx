import { useFetch } from '../../utils/api'

type Props = {
  status: string
}

export default function SimulationStatus({ status }: Props) {
  const { data } = useFetch(`simulationStatus`)

  return (
    <ul>
      {data ? (
        <div>
          <strong>Status: {data[status]}</strong>
        </div>
      ) : (
        <p>No status defined.</p>
      )}
    </ul>
  )
}
