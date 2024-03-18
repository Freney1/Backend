// knexfile.js
require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.AZURE_POSTGRESQL_HOST,
      user: process.env.AZURE_POSTGRESQL_USER,
      password: process.env.AZURE_POSTGRESQL_PASSWORD,
      database: process.env.AZURE_POSTGRESQL_DATABASE,
      port: Number(process.env.AZURE_POSTGRESQL_PORT) ,
      ssl: process.env.AZURE_POSTGRESQL_SSL
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
}
