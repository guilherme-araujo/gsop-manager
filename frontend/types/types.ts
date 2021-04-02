export type ParameterValueType = {
  parameter: string
  value: string
}

export type ParameterProgramType = {
  [id: string]: Array<ParameterValueType>
}

export type SingleSimulationType = {
  name: string
  descr: string
  pipeline: string
  parametersByProgram: ParameterProgramType

  status: string
}
