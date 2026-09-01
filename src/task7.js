const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
  console.log("Matriz Original:");
console.log(arr);
console.log("----------------------------------------");

// 1. Agregar un solo número a una fila existente
// Agregamos el número 30 al final de la última fila (índice 2)
arr[2].push(30);
console.log("1. Matriz después de agregar un número a la última fila:");
console.log(arr);
console.log("----------------------------------------");

// 2. Agregar una fila completa de números
// Creamos una nueva fila y la agregamos al final de la matriz
const newRow = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
arr.push(newRow);
console.log("2. Matriz después de agregar una fila completa:");
console.log(arr);
console.log("----------------------------------------");

// 3. Eliminar un solo número de una fila específica
// Eliminamos el número 15 de la segunda fila (índice 1). El 15 está en el índice 5 de esa fila.
arr[1].splice(5, 1);
console.log("3. Matriz después de eliminar el número 15 de la segunda fila:");
console.log(arr);
console.log("----------------------------------------");

// 4. Invertir una de las filas
// Invertimos el orden de los elementos en la primera fila (índice 0)
arr[0].reverse();
console.log("4. Matriz después de invertir la primera fila:");
console.log(arr);
  
  
  // Type your code above this line!