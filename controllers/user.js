const User = require('../models/user');

const getUser = (req, res) => {
  User.find({})
    .then((user) => res.send(user))
    .catch((err) => res.status(404).send({ message: err.message }));
};

const getUserById = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.send(user))
    .catch((err) => res.status(404).send({ message: err.message }));
};

const createUser = (req, res) => {
  User.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports = { getUser, getUserById, createUser };
