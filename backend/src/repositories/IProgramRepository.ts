import { Program } from '../entities/Program'

export interface IProgramRepository {
  save(program: Program): Promise<void>
  getAllPrograms(): Promise<Program[]>
}
