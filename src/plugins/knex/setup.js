const knex = require('knex');

const connectionCheck = db => db.raw('select 1+1 as result');

const getKnexClient = async ({ options }) => {
  try {
    const db = knex({ ...options });
    await connectionCheck(db);
    //setupPaginator(db);
    await connectionCheck(db);
    return db;
  } catch (e) {
    //logger.error({ message: `DB connection failed`, err: e });
    throw Error(`Connection Failed ${e}`);
}
};
module.exports = getKnexClient;