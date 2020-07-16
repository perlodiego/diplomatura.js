//import { db } from '../helpers/db';
import { paramsBuilder } from '../helpers/helpers';
import { insertToDb } from '../helpers/helpers';

const collectionName = 'alumnos';
const validParams = ['id', 'nombre', 'edad', 'provincia'];

async function create(req, res) {

  try {
    const params = paramsBuilder(validParams, req.body);
    const result = await insertToDb(collectionName, params);
    res.send(result);

  } catch (e) {
    res.json(e);
  }
}
/*
router.get('/', function (req, res) {
  // Completar
  res.json({});
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
*/
module.exports = { create };
