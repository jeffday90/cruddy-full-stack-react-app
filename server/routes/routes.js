const express = require('express');
const bodyParser = require('body-parser');
const {
  getUsers, addUser, editFact, removeUser,
} = require('../controllers/userControllers');

const router = express.Router();
router.use(bodyParser.json());

router.get('/users', (req, res) => {
  getUsers(req, res);
});

router.post('/user', (req, res) => {
  addUser(req, res);
});

router.put('/editFact', (req, res) => {
  editFact(req, res);
});

router.delete('/removeUser', (req, res) => {
  removeUser(req, res);
});

module.exports = router;
