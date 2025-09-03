const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]

// Escribe tu codigo por debajo de esta linea
// task 4: No contiene ningun elemento duplicado
const indexDuplicado = arr.lastIndexOf(5);
arr.splice(indexDuplicado, 1);

// TEscribe tu codigo por encima de esta linea

//No tocar esta funcion
export function taskArr(){
  return arr;
}
