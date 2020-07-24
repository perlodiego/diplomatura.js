//document.getElementById('app').innerHTML = 'Hello World!';

// Ejercicio 1: Generar una tabla: -> index2.html

const crearTabla = (es = false) => {
  document.getElementById('app').innerHTML = ''; // Limpia el contenedor.
  const MOUNTAINS = [
    { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
    { name: 'Everest', height: 8848, place: 'Nepal' },
    { name: 'Mount Fuji', height: 3776, place: 'Japan' },
    { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
    { name: 'Denali', height: 6168, place: 'United States' },
    { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
    { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
  ];

  const tabla = document.createElement('table');

  let headers = Object.keys(MOUNTAINS[0]); // Usamos el primer elemento para extraer las keys.

  const tablaHeaders = document.createElement('tr');

  // Loop para el header:

  if (!es) {
    for (let i = 0; i < headers.length; i++) {
      let row = document.createElement('th');
      let s = document.createTextNode(headers[i]);
      row.appendChild(s);
      document.getElementById('app').appendChild(row);
    }
  } else {
    let headersS = ['nombre', 'altura', 'lugar'];
    for (let i = 0; i < headersS.length; i++) {
      let row = document.createElement('th');
      let s = document.createTextNode(headersS[i]);
      row.appendChild(s);
      document.getElementById('app').appendChild(row);
    }
  }

  // Loop para los datos:
  for (let i = 0; i < MOUNTAINS.length; i++) {
    let row = document.createElement('tr');
    for (header of headers) {
      let data = document.createElement('td');
      let value = MOUNTAINS[i][header];
      let s = document.createTextNode(value);
      data.appendChild(s);
      row.appendChild(data);
    }
    document.getElementById('app').appendChild(row);
  }
};

// Ejercicio 2: Variante de tabla. -> index3.html

// let boton = document.getElementById('boton');

// boton.addEventListener('click', () => {
//   crearTabla();
// });

// let boton2 = document.getElementById('boton2');

// boton2.addEventListener('click', () => {
//   crearTabla((es = true));
// });

// Ejercicio 3: Implementar una lista de compras -> index4.html

// const TODO = ['Queso', 'Tomates', 'Zanahorias', 'Toalla'];

// const contenedor = document.getElementById('app');

// const ulist = document.createElement('ul');

// const eliminarValor = (element) => {
//   element.remove();
// };

// for (let elemento of TODO) {
//   let nodo = document.createElement('li');
//   const str = document.createTextNode(elemento);
//   nodo.appendChild(str);
//   const botonEliminar = document.createElement('button');
//   botonEliminar.setAttribute('class', 'botonEliminar');
//   botonEliminar.innerHTML = 'Eliminar';
//   botonEliminar.addEventListener('click', () => {
//     eliminarValor(nodo);
//   });
//   nodo.appendChild(botonEliminar);
//   ulist.appendChild(nodo);
// }

// const ingreso = document.createElement('input');
// ingreso.setAttribute('type', 'text');
// ingreso.setAttribute('id', 'texto');
// contenedor.appendChild(ingreso);

// const boton = document.createElement('button');
// boton.setAttribute('class', 'botonIngreso');
// boton.innerHTML = 'Insertar Valor';
// contenedor.appendChild(boton);

// const insertarValor = () => {
//   const origen = document.getElementById('texto').value;
//   if (origen) {
//     let nodo = document.createElement('li');
//     const str = document.createTextNode(origen);
//     nodo.appendChild(str);
//     const botonEliminar = document.createElement('button');
//     botonEliminar.setAttribute('class', 'botonEliminar');
//     botonEliminar.innerHTML = 'Eliminar';
//     botonEliminar.addEventListener('click', () => {
//       eliminarValor(nodo);
//     });
//     nodo.appendChild(botonEliminar);
//     ulist.appendChild(nodo);
//     contenedor.appendChild(ulist);
//   }
// };

// boton.addEventListener('click', insertarValor);

// contenedor.appendChild(ulist);

// Ejercicio 4: Jugando con globos -> index4.html

const eliminarGlobo = (element) => {
  element.remove();
  const globos = document.getElementsByTagName('div').length;

  if (globos - 1 === 0) {
    document.getElementById('app').innerHTML = '¡Ganaste!';
  }
};

const obtenerNumeroRandom = (max) => {
  return Math.floor(Math.random() * max);
};

const obtenerNumeroRango = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const colores = ['red', 'blue', 'yellow'];

const generarGlobos = () => {
  const cantidadGlobos = obtenerNumeroRango(10, 30);
  console.log(cantidadGlobos); // Solo para validar.

  for (let i = 0; i < cantidadGlobos; i++) {
    let contenedor = document.createElement('div');
    let top = obtenerNumeroRandom(500) + 'px';
    let left = obtenerNumeroRandom(1200) + 'px';
    contenedor.style.top = top;
    contenedor.style.left = left;
    contenedor.style.backgroundColor = colores[i % colores.length];
    contenedor.style.borderRadius = '50px';
    contenedor.addEventListener('click', () => {
      eliminarGlobo(contenedor);
    });
    document.body.appendChild(contenedor);
  }
};
generarGlobos();
