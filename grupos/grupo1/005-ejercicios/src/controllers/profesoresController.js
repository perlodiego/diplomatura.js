import { paramsBuilder } from '../helpers/helpers';
import { insertToDb } from '../helpers/helpers';

const collectionName = 'profesores';
const validParams = ['id', 'nombre'];

async function create(req, res) {

  try {
    const params = paramsBuilder(validParams, req.body);
    const result = await insertToDb(collectionName, params);
    res.send(result);

  } catch (e) {
    res.json(e);
  }
}

module.exports = { create };
