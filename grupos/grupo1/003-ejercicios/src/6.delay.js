<<<<<<< HEAD
export let delay = (segundos) => {
  return new Promise((resolve, reject) => {
    let status = false;
    setTimeout(() => {
      status = true;
      if (status) {
        resolve(status);
      } else {
        reject(status);
      }
    }, segundos * 1000);
=======
export const delay = (mensaje, tiempo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(mensaje);
    }, tiempo);
>>>>>>> 54ca61f1dd7744c9869792294aafd36e7fa126e8
  });
};

export async function run() {
<<<<<<< HEAD
  console.log('1');
  delay(2).then(console.log('Terminó 1'));
  console.log('2');
  delay(1).then(console.log('Terminó 2'));
  console.log('3');
  delay(1).then(console.log('Terminó 3'));
=======
  console.log(1);
  delay('Terminó 1', 1000).then('Terminó 1');
  console.log(2);
  delay('Terminó 2', 2000).then('Terminó 2');
  console.log(3);
  delay('Terminó 3', 3000).then('Terminó 3');
>>>>>>> 54ca61f1dd7744c9869792294aafd36e7fa126e8
}
