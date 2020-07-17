import express from 'express';
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');

router.route('/')
.post(
    profesoresController.create
)
.get(
    profesoresController.index
)

router.route('/:id')
.get(
    profesoresController.display
)
.put(
    profesoresController.update
)
.delete(
    profesoresController.destroy
)

module.exports = router;
