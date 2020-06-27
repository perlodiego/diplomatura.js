/*## 6. Delay (_TAREA PARA EL HOGAR_)

- Modificar nuestra función `delay` para que utilice Promises. `delay` tomará un sólo parámetro `segundos` y
 debe devolver una Promise que resuelva cuando el tiempo ha finalizado.

- Una vez modificada, cambiar nuestra función run() para que muestre en orden los siguientes mensajes. 

  ```
  1
  Terminó 1
  2
  Terminó 2
  3
  Terminó 3
  ```

#### Tip 1: Puede usarse Promise chaining o async/await

#### Tip 2: Si usamos async/await tenemos que convertir nuestra función run a asincrónica: `async run(...){ .... }`

#### Tip 3: utilizar el constructor de Promise que nos permite obtener una referencia una función `resolve` ç
que nos permite resolver la promesa
```
return new Promise(resolve => { 
     .... something ...
     resolve( ... something ...)
     .... something ...
   });
}
```*/

const delay=async (milisegundos)=>{
    return new Promise(res=>res(setTimeout(()=>true,milisegundos)));
}

const run=async ()=>{
   delay(10000).then(res=>{
        console.log('Resultado 1')
        console.log(res);
        if (res) {
            console.log(1);
            console.log('Terminó 1');
        }
   }).catch(err=>console.log('Error en 1: '+err));
   
   delay(10000).then(res=>{
        if (res) {
            console.log(2);
            console.log('Terminó 2');
        }
    }).catch(err=>console.log('Error en 2: '+err));

   delay(10000).then(res=>{
        if (res) {
            console.log(3);
            console.log('Terminó 3');
        }
    }).catch(err=>console.log('Error en 3: '+err));
}

export const CallbackRecargado={
    run
};