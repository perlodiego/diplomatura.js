import { db } from '../models/db';
import { paramsBuilder } from '../models/helpers';

const collectionName = 'alumnos';
const validParams = ['id','nombre','edad','provincia'];

async function create(req,res){
  try {
    const params     = paramsBuilder(validParams,req.body);
    const database   = await db.getDb();
    const collection = db.getCollection(collectionName)(database);
    collection.insertOne(params).then(alumno=>{
        req.alumno = alumno;
        db.closeDb();
        res.send(alumno);
    }).catch(error=>{
        db.closeDb();
        console.log(error);
        res.status(422).json({
            error
        })
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
}

/*router.get('/', function (req, res) {
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
module.exports = { create }