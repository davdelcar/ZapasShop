import { Sequelize } from 'sequelize'

export const db = new Sequelize('zapas', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3308'
})
export const dbConection = async () => {
  try {
    await db.authenticate()
    await db.sync({})
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
