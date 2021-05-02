import { ISimulationResultRepository } from '../ISimulationResultRepository'
import { v4 as uuid } from 'uuid'
import { get, put } from '../../database'
import { Simulation } from '../../entities/Simulation'
import { SimulationResult } from '../../entities/SimulationResult'

export class DBSimulationResultRepository implements ISimulationResultRepository {
  async listAll(): Promise<SimulationResult[]> {
    const response = await get('simulationResults')
    const simulationResults = new Array<SimulationResult>()
    for(const key of Object.keys(response)){
      const simulationResult = new SimulationResult(response[key], key)
      simulationResults.push(simulationResult)
    }
    return simulationResults
  }
  
  async findOne(id: string):Promise<SimulationResult> {
    const response = await get('simulationResults')
    const simulationResult = new SimulationResult(response[id], id);

    return simulationResult
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