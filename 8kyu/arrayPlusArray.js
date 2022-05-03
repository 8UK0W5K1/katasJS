// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, b) => a + b);
}

// function arrayPlusArray(arr1, arr2) {
//   let arr = [...arr1, ...arr2];
//   return arr.reduce((a, b) => a + b);
// }

// Array.prototype.concat()

// La méthode concat() est utilisée afin de fusionner deux ou plusieurs tableaux en les concaténant. Cette méthode ne modifie pas les tableaux existants, elle renvoie un nouveau tableau qui est le résultat de l'opération.
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);
// // expected output: Array ["a", "b", "c", "d", "e", "f"]
