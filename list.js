function arrayToList(array) {
  let result = {};
  if (Array.isArray(array)) {
    let list = null;
    array = array.reverse();
    for (let item of array) {
      list = {
        value: item,
        rest: list
      };
    }
    result = list;
  }
  return result;
}

function listToArray(list) {
  let result = [];
  if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
    return result;
  } else {
    for (let node = list; node; node = node.rest) {
      if (node.hasOwnProperty('value')) {
        result.push(node.value);
      }
    }
  }
  return result;
}

// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
