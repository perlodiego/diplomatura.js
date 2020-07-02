import fetch from 'node-fetch';

export const resultadoConsole = () => {
  fetch('https://jsonplaceholder.typicode.com/users').then((result) =>
    console.log(result)
  );
};

export const resultadoJson = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((result) => result.json())
    .then((result) => {
      console.log(result);
    });
};

export const resultadoFiltrado = (id) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((result) => result.json())
    .then((result) => {
      const user = result.find((x) => x.id === id);
      const found = {
        name: user.name,
        address: user.address,
      };
      console.log(found);
    });
};

