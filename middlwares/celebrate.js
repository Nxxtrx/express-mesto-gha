const { celebrate, Joi } = require('celebrate');
const { regexImageLink } = require('../utils/constants');

const validateCreateCard = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().regex(regexImageLink),
  }),
});

const validateCardId = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().alphanum().length(24),
  }),
});

const validateCreateAndLoginUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const validateUserId = celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24),
  }),
});

const validateUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
});

const validateAvatarUser = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().regex(regexImageLink),
  }),
});

module.exports = {
  validateCreateCard,
  validateCardId,
  validateCreateAndLoginUser,
  validateAvatarUser,
  validateUpdateUser,
  validateUserId,
};
