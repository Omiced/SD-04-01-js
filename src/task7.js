const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  // 1. Agregar número a una fila existente
arr[0].push(99);

// 2. Agregar una fila completa
arr.push([30,31,32]);

// 3. Eliminar un número de una fila específica
const index = arr[1].indexOf(15);
if (index !== -1) {
  arr[1].splice(index, 1);
}

// 4. Invertir una fila sin afectar a las demás
arr[2].reverse();

console.log(arr);
  
  
  // Type your code above this line!