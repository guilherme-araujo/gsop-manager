import { useFetch } from '../../utils/api'

type ParameterValues = {
  parameter: string
  value: string
}

type Props = {
  parameterValue: ParameterValues
}

export default function ParameterConfig({ parameterValue }: Props) {
  const { data } = useFetch(`parameter/id/${parameterValue.parameter}`)

  return (
    <div>
      {data ? <>{data.name}</> : <>Loading...</>}:{' '}
      <input type="text" defaultValue={parameterValue.value} />
      <button>Update</button>
    </div>
  )
}
