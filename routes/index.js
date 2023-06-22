const router = require('express').Router();
const { auth } = require('../middlwares/auth');
const userRoutes = require('./user');
const cardRoutes = require('./card');
const { login, createUser } = require('../controllers/user');
const NotFoundError = require('../errors/NotFoundError');
const celebrates = require('../middlwares/celebrate');

router.post('/signin', celebrates.validateCreateAndLoginUser, login);
router.post('/signup', celebrates.validateCreateAndLoginUser, createUser);
router.use(auth);
router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
router.use('/*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
