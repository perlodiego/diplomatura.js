import express from 'express';
import { helper } from './helpers';

const router = express.Router();

router.get('/', function (req, res) {
  // Completar
  const result = helper.ejecutarCRUD();

  //   const query = req.query['nombre'];
  //   if (query) {
  //     res.json({ mensaje: 'Hola ' + query });
  //   } else {
  //     res.json({ mensaje: 'Hola' });
  //   }
  res.json({ mensaje: 'Bienvenido a otra cosa' });
});

router.get('/:id', function (req, res) {
  // Completar
  res.json({});
});

router.post('/', function (req, res) {
  // TIP: En req.body viene los datos

  // Completar
  res.json({});
});

// Completar el resto de los métodos
// router....

export default router;
