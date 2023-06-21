const router = require('express').Router();
const { auth } = require('../middlwares/auth');
const userRoutes = require('./user');
const cardRoutes = require('./card');
const { login, createUser } = require('../controllers/user');

router.post('/signin', login);
router.post('/signup', createUser);
router.use(auth);
router.use('/users', userRoutes);
router.use('/cards', cardRoutes);
// router.use('/*', (req, res) => {
//   res.status(404).send({ message: 'Страница не найдена' });
// });

module.exports = router;
