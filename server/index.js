const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

const getUsers = (req, res) => {
  db.query('SELECT * FROM account', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
};

const addUser = (req, res) => {
  const userInfo = req.body;
  db.query(`INSERT INTO account (user_id, name, fact) VALUES (3, '${userInfo.name}', '${userInfo.fact}');`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
};

app.get('/users', (req, res) => {
  getUsers(req, res);
});

app.post('/user', (req, res) => {
  addUser(req, res);
});

// module.exports = getUsers;
