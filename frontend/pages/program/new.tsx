import Link from 'next/link'
import { SyntheticEvent, useState } from 'react'
import ProgramForm from '../../components/Forms/ProgramForm'
import ProgramDescription from '../../components/ProgramDescription'
import Layout from '../../components/Layout'
import { api } from '../../utils/api'

type ProgramType = {
  [id: string]: {
    name: string
    descr: string
    binaryPath: string
  }
}

const NewProgram = () => {
  const [created, setCreated] = useState<ProgramType | undefined>(undefined)

  const saveProgram = async (e: SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      name: { value: string }
      descr: { value: string }
      file: { value: string }
    }
    const name = target.name.value
    const descr = target.descr.value
    const binaryPath = target.file.value

    const res = await api.post('program', {
      program: { name, descr, binaryPath },
    })
    setCreated(res.data)
  }

  return (
    <Layout title="User Area | GSOP Manager">
      <Link href="/program">
        <a>Back to programs</a>
      </Link>
      <h1>New Program</h1>
      {created ? (
        <ProgramDescription
          id={Object.keys(created)[0]}
          name={created[Object.keys(created)[0]].name}
          descr={created[Object.keys(created)[0]].descr}
          binaryPath={created[Object.keys(created)[0]].binaryPath}
        />
      ) : (
        <ProgramForm save={saveProgram} name={''} descr={''} binarypath={''}>
          <div>
            <label htmlFor="file">File path</label>
            <input id="file" name="file" type="text" required />
            <br />
          </div>
        </ProgramForm>
      )}
    </Layout>
  )
}

export default NewProgram
