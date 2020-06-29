/*## 4. Consumir una API con Promise Chaining

Consumir la API https://jsonplaceholder.typicode.com/users y mostrar por consola los datos requeridos

- Abrir el archivo archivo 4.api.js

- Utilizar la función fetch para obtener los datos desde la URL.

- Mostrar por consola el resultado de fetch

- Convertir los resultados a un objeto utilizando resultado.json() **utilizando promise chaining**

- Mostrar por consola el nombre del usuario y la ciudad donde vive
 */

import fetch from 'node-fetch';

export const forFetch=fetch('https://jsonplaceholder.typicode.com/users');