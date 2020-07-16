/**
  * Devuelve un objeto filtrando post con los parámetros admitidos
  * @param {Array} validParams accepted params for validation
  * @param {Object} requestBody parameters sended by post
  */

const paramsBuilder=(validParams,requestBody)=>validParams.reduce((filteredObject,acceptedAttribute)=>{
    if (Object.prototype.hasOwnProperty.call(requestBody,acceptedAttribute)) {
        filteredObject[acceptedAttribute] = requestBody[acceptedAttribute];
    }
    return filteredObject;
},{});
  
module.exports = { paramsBuilder };