import { ISimulationResultRepository } from '../ISimulationResultRepository'
import { v4 as uuid } from 'uuid'
import { get, put } from '../../database'
import { Simulation } from '../../entities/Simulation'
import { SimulationResult } from '../../entities/SimulationResult'

export class DBSimulationResultRepository implements ISimulationResultRepository {
  async listAll() {
    const simulationResults = await get('simulationResults')
    return simulationResults
  }
  
  async findOne(id: string) {
    const simulationResults = await get('simulationResults')
    return simulationResults[id]
  }

  async linkSimulationResultSimulation(simulationResult: SimulationResult, simulation: Simulation){
    const newId = uuid()
    let idList = {}
    try {
      idList = await get('simulation-simulationResult')
    } finally {
      idList = idList['err'] ? {} : idList
    }
    idList[newId] = simulationResult.id, simulation.id

    await put('simulation-simulationResult', idList)
  }
}