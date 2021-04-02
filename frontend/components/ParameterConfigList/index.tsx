import Link from 'next/link'
import { ParameterProgramType } from '../../types/types'

type Props = {
  parametersByProgram: ParameterProgramType
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
