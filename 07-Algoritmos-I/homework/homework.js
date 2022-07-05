'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  function esPrimo(numero) {
    
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
} 

  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var array = []
  var primos = []
  for (let x=0;x<=num;x++) {
    if (esPrimo(x))
        primos.push(x)
}
  var tam = primos.length - 1
 
 while (num > 1){
   if (num % primos[tam] == 0){
     array.unshift(primos[tam])
     num = num/primos[tam]
     tam = primos.length - 1
   }else {
     tam --
   }
  
 } 
 if (num == 1){
     array.unshift(num)
 }
 
 return array
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  do {
    var swapped= false
   for (var i=0 ; i< array.length-1 ; i++){
     var izq = array[i]
     var der = array[i+1]
     if(izq > der){
       array[i]= der
       array[i+1] = izq
       swapped = true
     }
   }
   
 }while (swapped)
 return array

}


function insertionSort(arr) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
      let j
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    return arr
  
  
  
}



function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i = 0 ; i < array.length; i++  ){
    var MenorActual=array[i] 
    for (let x = i ; x< array.length ; x++){
       if (MenorActual > array[x]){
           MenorActual = array[x]
           var memori = x
       }
      
   } if(array[i] !== MenorActual){
       array[memori]=array[i]
      array[i] = MenorActual 
   }
     
 }
return array

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
