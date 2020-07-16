import { db } from '../helpers/db';
/**
 * Devuelve un objeto filtrando post con los parámetros admitidos
 * @param {Array} validParams accepted params for validation
 * @param {Object} requestBody parameters sended by post
 */

const paramsBuilder = (validParams, requestBody) =>
  validParams.reduce((filteredObject, acceptedAttribute) => {
    if (Object.prototype.hasOwnProperty.call(requestBody, acceptedAttribute)) {
      filteredObject[acceptedAttribute] = requestBody[acceptedAttribute];
    }
    return filteredObject;
  }, {});

//module.exports = { paramsBuilder };

async function insertToDb(collectionName, params) {
  console.log(collectionName);
  const database = await db.getDb();
  const collection = db.getCollection(collectionName)(database);
    collection
      .insertOne(params)
      .then((response) => {
        req.response = response;
        db.closeDb();
        console.log(response);
        //return (response);
        res.send(result);
      })
      .catch((error) => {
        db.closeDb();
        console.log(error);
        /*res.status(422).json({
          error,
        });*/
        return (error);
      });
}


module.exports = { paramsBuilder, insertToDb };

