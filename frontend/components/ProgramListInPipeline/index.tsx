type ProgramType = {
  name: string
  descr: string
  binaryPath: string
}

type PipelineType = {
  name: string
  descr: string
  programs: {
    [order: string]: string
  }
  programObjs: {
    [id: string]: ProgramType
  }
}

type Props = {
  pipeline: PipelineType
}

export default function ProgramListInPipeline({ pipeline }: Props) {
  return (
    <ul>
      {pipeline ? (
        <>
          {Object.keys(pipeline.programs).map((order, i) => {
            const programObj = pipeline.programObjs[pipeline.programs[order]]
            return (
              <li key={i}>
                {order}: <strong>{programObj.name}</strong> -{programObj.descr}
              </li>
            )
          })}
        </>
      ) : (
        <p>No parameters for this program.</p>
      )}
    </ul>
  )
}
