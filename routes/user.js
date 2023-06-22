const router = require('express').Router();
const {
  getUser, getUserById, updateUser, updateAvatarUser,
} = require('../controllers/user');
const celebrates = require('../middlwares/celebrate');

router.get('/', getUser);
router.get('/me', getUserById);
router.get('/:id', celebrates.validateUserId, getUserById);
router.patch('/me', celebrates.validateUpdateUser, updateUser);
router.patch('/me/avatar', celebrates.validateAvatarUser, updateAvatarUser);

module.exports = router;
