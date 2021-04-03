import { Request, Response } from 'express'
import { get, put } from '../database'
import { v4 as uuid } from 'uuid'
import { ISimulationRepository } from '../repositories/ISimulationRepository'
import { exec, execSync } from 'child_process'
import { promisify } from 'util'
import fs from 'fs'

const promExec = promisify(exec)

class SimulationController {
  constructor(private simulationRepository?: ISimulationRepository) {}

  async listAll(req: Request, res: Response) {
    const simulations = await get('simulations')
    return res.json(simulations)
  }

  async findOne(req: Request, res: Response) {
    const simulations = await get('simulations')
    const id = req.params.id
    return res.json(simulations[id])
  }

  async update(req: Request, res: Response) {
    const simulations = await get('simulations')
    const id = req.params.id
    simulations[id] = req.body.simulation
    const ok = await put('simulations', simulations)

    return res.json(ok)
  }

  async save(req: Request, res: Response) {
    const newSimulation = req.body.simulation
    newSimulation['status'] = '1'
    const newId = uuid()
    let idList = {}
    try {
      idList = await get('simulations')
    } finally {
      idList = idList['err'] ? {} : idList
    }
    idList[newId] = newSimulation
    const ok = await put('simulations', idList)
    return res.status(201).json({ [newId]: ok[newId] })
  }

  async resultList(req: Request, res: Response) {
    const simulations = await get('simulations')
    const id = req.params.id
    const sim = simulations[id]

    if (sim['status'] !== '3') {
      return res.status(400).json({ msg: 'Simulation not finished.' })
    }
    const files = fs.readdirSync(`/external/simulations/${id}/output`)
    //console.log(files)
    return res.json(files)
  }

  async resultDownload(req: Request, res: Response) {
    const simulations = await get('simulations')
    const id = req.params.id
    const sim = simulations[id]
    const fileName = `/external/simulations/${id}/output/${req.params.filename}`

    return res.download(fileName)
  }

  async reset(req: Request, res: Response) {
    const simulations = await get('simulations')
    const id = req.params.id
    const sim = simulations[id]
    sim['status'] = '1'
    simulations[id] = sim
    const ok = await put('simulations', simulations)
    return res.json(ok)
  }

  async run(req: Request, res: Response) {
    const srun = req.params.id
    let sims = {}
    let pipes = {}
    try {
      sims = await get('simulations')
      pipes = await get('pipelines')
    } finally {
      if (sims['msg']) return res.json({ msg: 'Simulation not found.' })
      if (pipes['msg']) return res.json({ msg: 'Pipeline not found.' })
    }
    const sim = sims[srun]
    const pipe = pipes[sim['pipeline']]

    if (sim['parametersByProgram']) {
      const progId = Object.keys(sim['parametersByProgram'])[0]
      const params = sim['parametersByProgram'][progId]
      const progs = await get('programs')

      const paramList = await get('parameters')

      sim.status = '2'
      sims[srun] = sim
      put('simulations', sims)
      const errorList = []

      async function runPipe() {
        try {
          const output = await promExec(
            `cp -r /external/pipelines/${pipe['rootDir']} /external/simulations/${srun}`
          )
        } catch (err) {
          errorList.push(err)
        }
        for (const progId of Object.keys(sim['parametersByProgram'])) {
          let cmd = ''
          const prog = progs[progId]
          cmd += prog['binaryPath'] + ' '
          for (const param of params) {
            cmd += paramList[param['parameter']]['param'] + param['value'] + ' '
          }
          try {
            const output = await promExec(
              `cd /external/simulations/${srun}/ && ./` + cmd
            )
          } catch (err) {
            errorList.push(err)
            break
          }
        }

        if (errorList.length > 0) {
          console.log(errorList)
          sim.status = '4'
          sims[srun] = sim
          put('simulations', sims)
        } else {
          sim.status = '3'
          sims[srun] = sim
          put('simulations', sims)
        }
      }
      /*console.log('before call')
      let prom = runPipe().then(() => {
        console.log('runPipe over')
      })
      console.log(prom)
      console.log('after call')*/
      runPipe()

      return res.json({ launched: true })
    }

    return res.json({ launched: false })
  }
}

export { SimulationController }
