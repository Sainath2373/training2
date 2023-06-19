const configObj ={
CLIENT_ID: "",
PORT: 4500,
HOST: "127.0.0.1",
POSTGRESQL_APP_DB: {
    host: "127.0.0.1",
    database:'postgres',
    user: 'postgres',
    password : 'root123',
    port: 5432,
    max_monnection: process.env.APP_DB_MAX_CONNECTIONS || 3000,
    debug:process.env.APP_DB_DEBUG_ENABLE === "true" ? true : false
},
}

module.exports = { configObj }
