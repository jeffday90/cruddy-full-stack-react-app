const { Pool } = require('pg');

const db = new Pool({
  user: '177830',
  host: 'localhost',
  database: 'test',
  password: '1234',
  port: 5432,
});

module.exports = db;
