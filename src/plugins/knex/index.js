const fp = require ('fastify-plugin');
const getKnexClient = require('./setup');
const dbConfig = require ('../../../config/knexconfig')
const knexPlugin = async (app, options) => {
    
    try {
       const db = await getKnexClient({ options: dbConfig });
       app.decorate('appdb',db);
        console.log('Connection Success'    );
  
    } catch (error) {
        console.log('Connection Error' +error);
      setTimeout(() => {
        process.exit(1);
  
    })
  };
}
  module.exports = fp(knexPlugin);
  
