import Link from 'next/link'

type ParameterValues = {
  parameter: string
  value: string
}

type ProgramParameters = {
  [id: string]: Array<ParameterValues>
}

type Props = {
  parametersByProgram: ProgramParameters
  simulation: string | string[]
}

export default function ParameterConfigList({
  parametersByProgram,
  simulation,
}: Props) {
  //const { data } = useFetch(`simulationStatus`)
  //{`/simulation/${simulation}/${prog}`}
  if (!simulation) {
    return <p>Loading...</p>
  } else {
    return (
      <ul>
        {Object.keys(parametersByProgram).map((prog, i) => (
          <li key={i}>
            {' '}
            <Link href={`/simulation/${simulation}/${prog}`}>
              <a>Program: {prog}</a>
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}
