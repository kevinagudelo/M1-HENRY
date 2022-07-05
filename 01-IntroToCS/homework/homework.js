'use strict'

function BinarioADecimal(num) {
  var tam = num.length -1
  var result = 0
  for(let x=0 ; x< num.length ; x++){
      result+= num[x] * 2 **tam
      tam --
  }
  
  return result

}

function DecimalABinario(num) {
  var decimal = num
  var newArr = []
  while(decimal >= 1){
      newArr.push(decimal%2)
      decimal= Math.floor(decimal/2)
  }

  for(let x = newArr.length-1  ; x >= 0 ; x--){
      str+=newArr[x]
  }
  return str


}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}