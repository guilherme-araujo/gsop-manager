import { Program } from '../entities/Program'

export interface IProgramRepository {
  listAll(): Promise<Program[]>

  findOne(id: string): Promise<Program>

  save(program: Program): Promise<Program>
}
