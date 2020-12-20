/* import Sequelize, { Options } from 'sequelize'
import { development } from './config'
import

const conf: Options = {
  dialect: 'sqlite',
  storage: development.storage
}

class Database {
  public connection: Sequelize.Sequelize

  constructor () {
    this.init()
  }

  init (): void {
    this.connection = new Sequelize.Sequelize(conf)
  }
}

const database: Database = new Database()

export default database
*/

import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { development } from './config'
import Users from './models/userType'

const conf: SequelizeOptions = {
  dialect: 'sqlite',
  storage: development.storage,
  models: [Users]
}

const sequelize = new Sequelize(conf)

export default sequelize
