import {
  Column,
  DataType,
  Model,
  Table
} from 'sequelize-typescript'

@Table({
  tableName: 'Users'
})
export class Users extends Model<Users> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  name!: string;

  @Column({
    allowNull: false,
    type: DataType.STRING
  })
  email!: string;
}

export default Users
