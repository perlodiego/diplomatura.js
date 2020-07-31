import express from 'express';
const router = express.Router();
const alumnosController = require('../controllers/alumnosController');

router.route('/').post(alumnosController.create).get(alumnosController.index);

router
  .route('/:id')
  .get(alumnosController.display)
  .put(alumnosController.update)
  .delete(alumnosController.destroy);

module.exports = router;
