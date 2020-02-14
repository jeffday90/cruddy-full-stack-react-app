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
  const { fact, name } = req.body;
  db.query(`INSERT INTO account (name, fact) VALUES ('${name}', '${fact}');`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
};

const editFact = (req, res) => {
  const { editedFact, name } = req.body;
  db.query(`UPDATE account SET fact= '${editedFact}' WHERE name= '${name}';`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result.rows);
    }
  });
};

const removeUser = (req, res) => {
  const { id } = req.body;
  db.query(`DELETE from account WHERE id= '${id}';`, (err, result) => {
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
