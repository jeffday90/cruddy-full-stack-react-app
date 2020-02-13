const { Pool } = require('pg');

// const connectionString = 'postgressql://177830:1234@localhost:5432/account';

// const client = new Client({
//   connectionString,
// });

// client.connect();

// client.query('SELECT * from account', (err, res) => {
//   console.log(err, res);
//   client.end();
// });

const db = new Pool({
  user: '177830',
  host: 'localhost',
  database: 'test',
  password: '1234',
  port: 5432,
});

module.exports = db;
