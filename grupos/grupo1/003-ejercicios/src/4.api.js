import fetch from 'node-fetch';

export const respuesta = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    //console.log(response);
    return response;
  })
  .then((response) => {
    let jsonificado = response.json().then((json) => {
      //console.log(json);
      return json;
    });
    return jsonificado;
  })
  .then((jsonificado) => {
    for (let objeto of jsonificado) {
      console.log('Nombre: ' + objeto.name + ' Ciudad: ' + objeto.address.city);
    }
  });

// recordar que fetch devuelve una promise, entonces puede hacer fetch(....).then(resultado => {.... })
