/*## 2. Vector (_TAREA PARA EL HOGAR_)

Escribir una clase Vector que represente un espacio de dos dimensiones x e y. Esta clase debe:

- Poder construirse desde dos valores `x` e `y`
- Debe tener dos getters para obtener esos valores
- Debe tener un método `sumar` que tome un vector por parámetro y devuelva _un nuevo vector_ sumando los valores de x e y de ambos vectores

  Por ejemplo:

  ```
  console.log(new Vector(1, 2).sumar(new Vector(2, 3)));

  // → Vector{x: 3, y: 5}
  ```*/

  export class Vector {
      constructor(x=0,y=0){
        this.x=x;
        this.y=y;
      };
      getX(){
          return 'Valor de x: '+this.x;
      }
      getY(){
          return 'Valor de y: '+this.y;
      }
      sumar(vector){
        return new Vector(this.x+vector.x,this.y+vector.y);
      };
  }