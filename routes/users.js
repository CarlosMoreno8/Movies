const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.delete('/delete', UserController.delete);

module.exports = router;