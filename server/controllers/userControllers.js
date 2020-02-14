const db = require('../../database/index');

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

const editFact = (req, res) => {
  const userInfo = req.body;
  console.log(req.body);
  db.query(`UPDATE account SET fact= '${userInfo.editedFact}' WHERE name= '${userInfo.name}';`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
};

const removeUser = (req, res) => {
  console.log('in req.body', req.body.name);
  db.query(`DELETE from account WHERE name= '${req.body.name}';`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
};


module.exports = {
  editFact,
  addUser,
  getUsers,
  removeUser,
};
