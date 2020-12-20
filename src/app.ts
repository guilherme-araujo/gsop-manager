import express from 'express'
import router from './routes'
import sequelize from './database'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

sequelize.authenticate().then(function () { console.log('Database connected') })

app.use(router)

export default app
