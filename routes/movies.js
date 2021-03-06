const router = require('express').Router();
const MovieController = require('../controllers/MovieController');

router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getById);
router.get('/title/:title', MovieController.getByTitle);
router.post('/', MovieController.create);

module.exports = router;