import express from 'express';
import { Conexion } from '../model/conexion';

const router = express.Router();
router.get('/', async function (req, res) {
  // Completar
  const db = await Conexion.conect();
  const collection = await db.collection('alumnos').find({}).toArray();
  Conexion.closeConexion();
  res.json({ collection });
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
