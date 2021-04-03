import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.query.simulation, req.query.filename)
  res.status(200).json({ name: 'John Doe' })
}
