/*
## 5. Consumir una API con asyc/await
- Copiar el código de el ejercicio 4 en el cuerpo de una nueva función asincrónica `async function getRemoteData()`.

- Modificar el cuerpo de la función para utilizar async/await en vez de Promise chaining.
*/
import fetch from 'node-fetch';

export async function getRemoteData() { 
    const data=await fetch('https://jsonplaceholder.typicode.com/users');
    console.log('Ejercicio 5 -> resultado');
    console.log(data);
    return await data.json();    
}