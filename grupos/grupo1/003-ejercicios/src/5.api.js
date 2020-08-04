import fetch from 'node-fetch';

<<<<<<< HEAD
// export async function getRemoteData() {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//       //console.log(response);
//       return response;
//     })
//     .then((response) => {
//       let jsonificado = response.json().then((json) => {
//         //console.log(json);
//         return json;
//       });
//       return jsonificado;
//     })
//     .then((jsonificado) => {
//       for (let objeto of jsonificado) {
//         console.log(
//           'Nombre: ' + objeto.name + ' Ciudad: ' + objeto.address.city
//         );
//       }
//     });
// }

export async function getRemoteData() {
  try {
    const datos = await fetch('https://jsonplaceholder.typicode.com/users');
    // console.log(datos);
    const jsonificado = await datos.json();
    // console.log(jsonificado);
    for (let objeto of jsonificado) {
      console.log('Nombre: ' + objeto.name + ' Ciudad: ' + objeto.address.city);
    }
  } catch (error) {
    console.log(error);
  }
=======
export async function getRemoteData(iduser) {
  const respuesta = await fetch(
    'https://jsonplaceholder.typicode.com/users/' + iduser
  )
    .then((value) => value.json())
    .then((respuesta) =>
      console.log(
        'Name: ' + respuesta.name + ' | City: ' + respuesta.address.city
      )
    );
>>>>>>> 54ca61f1dd7744c9869792294aafd36e7fa126e8
}
