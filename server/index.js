const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {
  getUsers, addUser, editFact, removeUser,
} = require('./controllers/userControllers');

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get('/users', (req, res) => {
  getUsers(req, res);
});

app.post('/user', (req, res) => {
  addUser(req, res);
});

app.put('/editFact', (req, res) => {
  editFact(req, res);
});

app.delete('/removeUser', (req, res) => {
  removeUser(req, res);
});
