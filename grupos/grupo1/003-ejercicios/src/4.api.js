import fetch from 'node-fetch';

<<<<<<< HEAD
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
=======
export const respuestaBulk = fetch(
  'https://jsonplaceholder.typicode.com/users'
).then((value) => console.log(value));

export const respuestaJson = fetch('https://jsonplaceholder.typicode.com/users')
  .then((value) => value.json())
  .then((respuesta) => console.log(respuesta));

export const respuestaDatos = (iduser) =>
  fetch('https://jsonplaceholder.typicode.com/users/' + iduser)
    .then((value) => value.json())
    .then((respuesta) =>
      console.log(
        'Name: ' + respuesta.name + ' | City: ' + respuesta.address.city
      )
    );
>>>>>>> 54ca61f1dd7744c9869792294aafd36e7fa126e8
