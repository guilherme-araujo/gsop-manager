import { Parameter } from '../entities/Parameter'
import { Program } from '../entities/Program'

export interface IParameterRepository {

  listAll(): Promise<Parameter[]>

  findOne(id: string): Promise<Parameter>

  findByProgram(program: string): Promise<Parameter[]>

  save(parameter: Parameter): Promise<Parameter>

  linkParameterProgram(parameter: Parameter, program: Program): Promise<void>
}
