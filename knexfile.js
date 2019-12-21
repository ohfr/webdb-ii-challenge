module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './car-dealer.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

};