const router = require('express').Router();
const {
  getUser, getUserById, createUser, updateUser, updateAvatarUser,
} = require('../controllers/user');

router.get('/', getUser);
router.get('/:id', getUserById);
router.post('/', createUser);
router.patch('/me', updateUser);
router.patch('/me/avatar', updateAvatarUser);

module.exports = router;
