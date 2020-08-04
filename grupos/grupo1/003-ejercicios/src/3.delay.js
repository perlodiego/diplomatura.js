<<<<<<< HEAD
// setTimeout(() =>  {console.log('hola mundo!')}, 3000);

export let delay = (mensaje, milisegundos) => {
    setTimeout(() =>  {console.log(mensaje)}, milisegundos);
}

// export let run = () => {
//     console.log(1);
//     delay('Terminó 1', 1000);
//     console.log(2);
//     delay('Terminó 2', 1000);
//     console.log(3);
//     delay('Terminó 3', 1000);
// }

export let run= () =>{
    console.log(1);
    delay('Terminó 1', 3000);
    console.log(2);
    delay('Terminó 2', 2000);
    console.log(3);
    delay('Terminó 3', 1000);
}
=======
export const delay = (mensaje, tiempo) => {
  setTimeout(() => {
    console.log(mensaje);
  }, tiempo);
};

export const run = () => {
  console.log(1);
  delay('Terminó 1', 3000);
  console.log(2);
  delay('Terminó 2', 2000);
  console.log(3);
  delay('Terminó 3', 1000);
};
>>>>>>> 54ca61f1dd7744c9869792294aafd36e7fa126e8
