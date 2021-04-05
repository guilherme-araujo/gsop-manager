import { IParameterRepository } from '../IParameterRepository'
import { v4 as uuid } from 'uuid'
import { get, put } from '../../database'
import { Program } from 'src/entities/Program'
import { Parameter } from 'src/entities/Parameter'


export class DBParameterRepository implements IParameterRepository {
  
  async listAll(){
    const parameters = await get('parameters')
    return parameters
  }

  async findOne(id: string) {
    const parameters = await get('parameters')
    return parameters[id]
  }

  async findByProgram(program: Program) {
    const parameters = await get('parameters')
    const filteredParams = []
    Object.keys(parameters).forEach((param, i) => {
      if (parameters[param].program === program.id) {
        filteredParams[param] = parameters[param]
      }
    })

    if (Object.keys(filteredParams).length > 0) {
      return filteredParams
    }
  }

  async save(parameter: Parameter) {
    const newId = uuid()
    let idList = {}
    try {
      idList = await get('parameters')
    } finally {
      idList = idList['err'] ? {} : idList
    }
    idList[newId] = parameter
    await put('parameters', idList)
    return parameter
  }

  async linkParameterProgram(parameter: Parameter, program: Program){
    const newId = uuid()
    let idList = {}
    try {
      idList = await get('parameter-program')
    } finally {
      idList = idList['err'] ? {} : idList
    }
    idList[newId] = parameter.id, program.id

    await put('parameter-program', idList)
  }
}