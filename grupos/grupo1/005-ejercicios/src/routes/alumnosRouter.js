import express from 'express';
const router = express.Router();
const alumnosController = require('../controllers/alumnosController');

router.route('/')
.post(
    alumnosController.create
)
.get(
    //alumnosController.listu
)

module.exports = router;
