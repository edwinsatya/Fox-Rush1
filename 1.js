/*
  /////////////////////
  FUNCTION MEDIAN GENAP
  /////////////////////

  Fungsi Median Genap adalah mencari nilai median yang berupa genap di array.

  [PROCESS]

  INPUT:
  [1, 3, 4, 5, 6, 7]
  PROCESS:
  genap = [4, 6]
  median = 5
  OUTPUT:
  5

  [RULES]

  - Dilarang menggunakan built in function selain .push()
*/

function medianGenap(arr) {
  // code below here
  var temp = null;
  var result = [];
  var arrMedian = [];
  for ( var i = 0; i < arr.length; i++ ){
    for ( var j = i+1; j < arr.length; j++){
      if ( arr[i] > arr[j]){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  for ( var k = 0; k < arr.length; k++){
    if ( arr[k] % 2 === 0){
      arrMedian.push(arr[k]);
    }
  }
  if (arrMedian.length === 0){
    return "Tidak ada median"
  }
  console.log(arrMedian);
  var medianOrNot = Math.floor(arrMedian.length/2);
  if ( arrMedian.length % 2 !== 0){
      result = arrMedian[medianOrNot];
  } else {
      result = ( arrMedian[medianOrNot-1] + arrMedian[medianOrNot] ) / 2
  }
  return result;
}

// TEST CASES
console.log(medianGenap([1, 2, 3, 4, 5])); // 3
console.log(medianGenap([1, 3, 4, 10, 12, 13])); // 10
console.log(medianGenap([3, 4, 7, 6, 10])); // 6
console.log(medianGenap([1, 3, 3])); // Tidak ada median
console.log(medianGenap([7, 7, 8, 8])); // 8