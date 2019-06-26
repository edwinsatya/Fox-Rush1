/*
  //////////////////////
  FUNCTION MULTIPLE BY 3
  //////////////////////

  Fungsi Multiple By 3 akan mengalikan angka-angka dengan angka di 3 setelahnya,
  kemudian akan menjumlahkan angka tersebut ketika ganjil

  [PROCESS]

  INPUT:
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  PROCESS:
  1 * 5 = 5 (ganjil)
  2 * 6 = 12 (genap)
  3 * 7 = 21 (ganjil)
  4 * 8 = 32 (genap)
  5 * 9 = 45 (ganjil)

  5 + 21 + 45 = 71
  OUTPUT:
  71

  [RULES]

  - Dilarang menggunakan built in function apapun
*/

function multipleBy3 (array) {
  // code below here
  var newArr = [];
  
  for ( var i = 0; i < array.length; i++){
    for ( var j = i+4; i < array.length; j++){
          var count = array[i]*array[j]
          newArr.push(count);
          break;
      }
  }
  console.log(newArr);
  var result = 0;
  for ( var k = 0; k < newArr.length; k++){
    if ( newArr[k] % 2 !== 0){
      result += newArr[k];
    }
  }
  return result;
}


console.log(multipleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 71