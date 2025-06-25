const { Router } = require('express');
const { listUsers, getUser, createUser } = require('../controllers/userController');

const router = Router();

router.get('/', listUsers);
router.get('/:id', getUser);
router.post('/', createUser);

module.exports = router;
