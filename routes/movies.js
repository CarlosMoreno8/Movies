const router = require('express').Router();
const MovieController = require('../controllers/MovieController');

router.get('/', MovieController.getAll);
//router.get('/', MovieController.getById);
//router.get('/', MovieController.getByTitle);
router.post('/', MovieController.create);

module.exports = router;