const router = require('express').Router();
const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/card');
const celebrates = require('../middlwares/celebrate');

router.get('/', getCards);
router.post('/', celebrates.validateCreateCard, createCard);
router.delete('/:cardId', celebrates.validateCardId, deleteCard);
router.put('/:cardId/likes', celebrates.validateCardId, likeCard);
router.delete('/:cardId/likes', celebrates.validateCardId, dislikeCard);

module.exports = router;
