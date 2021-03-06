import { Parameter } from '../entities/Parameter'
import { Program } from '../entities/Program'

export interface IParameterRepository {
  save(parameter: Parameter): Promise<void>
  getAllParameters(): Promise<Parameter[]>
  linkParameterProgram(parameter: Parameter, program: Program): Promise<void>
}
