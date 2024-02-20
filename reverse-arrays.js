function reverseArray(arr) {
  // Add code.
  var reversedArray = [];

  while( i = array.pop() )
  reversedArray.push( i );

  return reversedArray;
}

function reverseArrayInPlace(arr) {
  // Add code.
  function reverseArrayInPlace(array) {
    for(var i = 0; i < Math.floor( array.length/2 ); i++) {
      var temp = array [i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
  }
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]