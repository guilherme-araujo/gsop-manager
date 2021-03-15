type ParameterType = {
  [id: string]: {
    name: string
    descr: string
    program: string
    param: string
    optional: boolean
  }
}

type Props = {
  parameterList: {
    [id: string]: ParameterType
  }
}

export default function ParamsByProgramList({ parameterList }: Props) {
  return (
    <ul>
      {parameterList ? (
        <>
          {Object.keys(parameterList).map((param, i) => (
            <li key={i}>
              <strong>{parameterList[param].name}</strong> -
              {parameterList[param].descr}
            </li>
          ))}
        </>
      ) : (
        <p>No parameters for this program.</p>
      )}
    </ul>
  )
}
