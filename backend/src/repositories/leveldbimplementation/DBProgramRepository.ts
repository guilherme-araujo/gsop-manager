import { IProgramRepository } from '../IProgramRepository'
import { v4 as uuid } from 'uuid'
import { get, put } from '../../database'
import { Program } from '../../entities/Program'

export class DBProgramRepository implements IProgramRepository{
  async listAll(): Promise<Program[]> {
    const response = await get('programs')
    const programs = new Array<Program>() 
    for(const key of Object.keys(response)){
      const program = new Program(response[key], key)
      programs.push(program)
    }
    return programs
  }

  async findOne(id: string):Promise<Program> {
    const response = await get('programs')
    const program = new Program(response[id], id);

    return program
  }

  async save(program: Program) {
    const newId = uuid()
    let idList = {}
    try {
      idList = await get('programs')
    } finally {
      idList = idList['err'] ? {} : idList
    }
    idList[newId] = program
    await put('programs', idList)
    return program
  }
}
