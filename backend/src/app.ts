import express from 'express'
import cors from 'cors'
import router from './routes'
import bodyParser from 'body-parser'

const app = express()

app.use(cors)
app.use(bodyParser.json())
app.use(router)

export default app
