import { Parameter } from '../entities/Parameter'
import { Program } from '../entities/Program'

export interface IParameterRepository {

  listAll(): Promise<Parameter[]>

  findOne(id: string): Promise<Parameter>

  findByProgram(program: Program): Promise<Parameter[]>

  save(parameter: Parameter): Promise<Parameter>

  linkParameterProgram(parameter: Parameter, program: Program): Promise<void>
}
