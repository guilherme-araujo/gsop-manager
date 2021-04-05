import { get, put } from '../../database'
import { v4 as uuid } from 'uuid'
import { ISimulationRepository } from '../ISimulationRepository'
import { Parameter } from '../../entities/Parameter'
import { Pipeline } from '../../entities/Pipeline'
import { Simulation } from '../../entities/Simulation'
import { SimulationResult } from '../../entities/SimulationResult'
import { SimulationStatus } from '../../entities/SimulationStatus'

export class DBSimulationRepository implements ISimulationRepository {
  async listAll() {
    const simulations = await get('simulations')
    return simulations
  }

  async findOne(id: string) {
    const simulations = await get('simulations')
    return simulations[id]
  }

  async save(simulation: Simulation) {
    const newId = uuid()
    let idList = {}
    try {
      idList = await get('simulations')
    } finally {
      idList = idList['err'] ? {} : idList
    }
    idList[newId] = simulation
    await put('simulations', idList)
    return simulation
  }

  async linkSimulationPipeline(simulation: Simulation, pipeline: Pipeline){
    const newId = uuid()
    let idList = {}
    try {
      idList = await get('simulation-pipeline')
    } finally {
      idList = idList['err'] ? {} : idList
    }
    idList[newId] = simulation.id, pipeline.id

    await put('simulation-pipeline', idList)
  }

  async linkSimulationParameter(simulation: Simulation, parameter: Parameter){
    const newId = uuid()
    let idList = {}
    try {
      idList = await get('simulation-parameter')
    } finally {
      idList = idList['err'] ? {} : idList
    }
    idList[newId] = simulation.id, parameter.id

    await put('simulation-parameter', idList)
  }

  async linkSimulationSimulationResult(simulation: Simulation,simulationResult: SimulationResult){
    const newId = uuid()
    let idList = {}
    try {
      idList = await get('simulation-simulationResult')
    } finally {
      idList = idList['err'] ? {} : idList
    }
    idList[newId] = simulation.id, simulationResult.id

    await put('simulation-simulationResult', idList)
  }

  async linkSimulationSimulationStatus(simulation: Simulation,simulationStatus: SimulationStatus){
    const newId = uuid()
    let idList = {}
    try {
      idList = await get('simulation-simulationStatus')
    } finally {
      idList = idList['err'] ? {} : idList
    }
    idList[newId] = simulation.id, simulationStatus.id

    await put('simulation-simulationStatus', idList)
  }

}
