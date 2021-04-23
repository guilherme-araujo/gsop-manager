import Link from 'next/link'
import { SyntheticEvent, useState } from 'react'
import Layout from '../../components/Layout'
import PipelineForm from '../../components/Forms/PipelineForm'
import { api, useFetch } from '../../utils/api'

type PipelineType = {
  [id: string]: {
    name: string
    descr: string
    programs: Program[]
  }
}

type Program = {
  [order: number]: {
    name: string
    descr: string
    program: string
    param: string
    optional: boolean
  }
}

/*
EXPECTED FORMAT FOR newPipeline:
{
  "name": String
  "descr": String
  "programs": {
    "1": "uuid of program 1",
    "2": "uuid of program 2"
  }
}
*/

const NewPipeline = () => {
  const [created, setCreated] = useState<PipelineType | undefined>(undefined)
  const [programsList, setProgramsList] = useState<Array<string>>([])
  const [selectedProgram, setSelectedProgram] = useState('')
  const { data } = useFetch('program')

  const savePipeline = async (e: SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      name: { value: string }
      descr: { value: string }
      rootDir: { value: string }
    }
    const name = target.name.value
    const descr = target.descr.value
    const rootDir = target.rootDir.value
    let programObj: { [id: string]: string } = {}
    let idx = 1
    for (const prog of programsList) {
      programObj[idx.toString()] = prog
      idx += 1
    }
    const programs = programObj

    const res = await api.post('pipeline', {
      pipeline: { name, descr, rootDir, programs },
    })
    setCreated(res.data)
  }

  const chooseProgram = (e: SyntheticEvent) => {
    //e.preventDefault()
    const target = e.target as typeof e.target & {
      value: string
    }
    setSelectedProgram(target.value)
  }

  const addProgram = () => {
    const lst = [...programsList]
    if (selectedProgram !== '') {
      lst.push(selectedProgram)
      setProgramsList(lst)
    }
  }

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/pipeline">
        <a>Back to pipelines</a>
      </Link>
      <h1>New Pipeline</h1>
      {created ? (
        <>
          <p>Program created with id {Object.keys(created)[0]}</p>
          <p>Name: {created[Object.keys(created)[0]].name}</p>
          <p>Description: {created[Object.keys(created)[0]].descr}</p>
          <p>
            Programs:{' '}
            {Object.keys(created[Object.keys(created)[0]].programs).length}
          </p>
        </>
      ) : (
        <PipelineForm
          save={savePipeline}
          addProgram={addProgram}
          chooseProgram={chooseProgram}
          programList={programsList}
          data={data}
        />
      )}
    </Layout>
  )
}

export default NewPipeline
