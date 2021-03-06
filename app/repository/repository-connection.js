const { MongoClient } = require('mongodb');

exports.creteConenction = ({ dburi, client = MongoClient }) => {
  const locals = {};
  const connect = async () => {
    if (locals.conn) return locals.conn;

    console.log(process.env.DBURI);
    console.log(process.env.KEY);
    console.log(dburi);
        

    locals.conn = await client.connect(dburi);
    return locals.conn;
  };

  return {
    async getDb(dbname) {
      const conn = await connect();
      return conn.db(dbname);
    },
  };
};
