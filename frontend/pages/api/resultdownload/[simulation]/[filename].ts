import { NextApiRequest, NextApiResponse } from 'next'
import { baseURL } from '../../../../utils/api'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const simId = req.query.simulation
  const filename = req.query.filename.toString()

  /*const file = (
    await api.get(`/simulation/resultdownload/${simId}/${filename}`)
  ).data*/
  const file = (
    await fetch(`${baseURL}simulation/resultdownload/${simId}/${filename}`)
  ).body

  console.log(
    'etc',
    `${baseURL}/simulation/resultdownload/${simId}/${filename}`
  )
  //res.send(file.body)

  const extension = filename.split('.')[1]
  if (extension === 'png') {
    res.setHeader(
      'content-disposition',
      'inline; filename=' + req.query.filename
    )
    res.setHeader('Content-Type', 'image/png')
    res.send(file)
  } else if (extension === 'jpg') {
    res.setHeader('Content-Type', 'image/jpg')
    res.setHeader(
      'content-disposition',
      'inline; filename=' + req.query.filename
    )
    res.send(file)
  } else {
    res.setHeader(
      'content-disposition',
      'attachment; filename=' + req.query.filename
    )
    res.send(file)
  }
  //res.json({ etc: 'none' })
}
