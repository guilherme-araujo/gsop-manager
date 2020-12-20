import { Router, Request, Response } from 'express'
import { Users } from './database/models/userType'

const router = Router()

router.get('/', async (req, res) => {
  const users = await Users.findAll()
  res.json(users)
})

router.post('/user', async (req: Request, res: Response) => {
  const { name, email } = req.body

  await Users.create({ name, email })
  res.status(201).send()
})

export default router
