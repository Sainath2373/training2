const {constObj, configObj} =require ('./config');
const {host,user,password,database,port,max_monnection,debug} =configObj.POSTGRESQL_APP_DB
const databaseConfiguration = {

    client: 'postgres',
    pool: {
      min: parseInt(3),
      max: parseInt(max_monnection)
    },
    acquireConnectionTimeout: 30000,
    seeds: {
    },
    connection: {
      host: host,
      user: user,
      password: password,
      database: database,
      port: port
    },
    asyncStackTraces: false,
    debug: debug,
    propagationError:false
  };
  
  module.exports = databaseConfiguration;
  