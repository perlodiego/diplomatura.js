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
  });
};

export async function run() {
  console.log('1');
  delay(2).then(console.log('Terminó 1'));
  console.log('2');
  delay(1).then(console.log('Terminó 2'));
  console.log('3');
  delay(1).then(console.log('Terminó 3'));
}
