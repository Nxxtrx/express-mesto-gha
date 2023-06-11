const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((card) => res.send(card))
    .catch(() => res.status(500).send({ message: 'Внутренняя ошибка сервера' }));
};

const createCard = (req, res) => {
  Card.create({
    ...req.body,
    owner: req.user._id,
  }).then((card) => res.status(201).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные при создании карточки' });
      } else {
        res.status(500).send({ message: 'Внутренняя ошибка сервера' });
      }
    });
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => res.send(card))
    .catch(() => res.status(404).send({ message: 'Карточка с указанным _id не найдена' }));
};

const likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  ).then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные для постановки лайка' });
      } else if (err.name === 'CastError') {
        res.status(404).send({ message: 'Передан несуществующий _id карточки' });
      } else {
        res.status(500).send({ message: 'Внутренняя ошибка сервера' });
      }
    });
};

const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  ).then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные для снятия лайка' });
      } else if (err.name === 'CastError') {
        res.status(404).send({ message: 'Передан несуществующий _id карточки' });
      } else {
        res.status(500).send({ message: 'Внутренняя ошибка сервера' });
      }
    });
};

module.exports = {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
};
