import { IProgramRepository } from '../IProgramRepository'
import { v4 as uuid } from 'uuid'
import { get, put } from '../../database'
import { Program } from '../../entities/Program'

export class DBProgramRepository implements IProgramRepository{
  async listAll() {
    const programs = await get('programs')
    return programs
  }

  async findOne(id: string) {
    const programs = await get('programs')
    return programs[id]
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
