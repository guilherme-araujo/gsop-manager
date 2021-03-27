import { useFetch } from '../../utils/api'

type ParameterValues = {
  pvalue: {
    parameter: string
    value: string
  }
  idx: number
  updated: boolean
}

type Props = {
  parameterValue: ParameterValues
}

export default function ParameterConfig({ parameterValue }: Props) {
  const { data } = useFetch(`parameter/id/${parameterValue.pvalue.parameter}`)
  return (
    <div>
      {data ? <>{data.name}</> : <>Loading...</>}:{' '}
      <input
        type="text"
        name={parameterValue.idx.toString()}
        id={parameterValue.idx.toString()}
        defaultValue={parameterValue.pvalue.value}
        disabled={parameterValue.updated}
      />
    </div>
  )
}
