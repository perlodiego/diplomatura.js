import express from 'express';
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');

router.route('/')
.post(
    profesoresController.create
)
.get(

)

module.exports = router;
