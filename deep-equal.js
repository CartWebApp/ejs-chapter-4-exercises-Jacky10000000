function deepEqual(Ob1, Ob2) {

  if( Ob1 === Ob2 ) return true;
  
  if( Ob1 == null || typeof Ob1 != "object" || Ob2 == null || typeof Ob2 != "object" ) return false;

  var propsOb1 = 0, propsOb2 = 0;

  for( var prop in Ob1 )
    propsOb1++;

  for( var prop in Ob2 ) {
    propsOb2++;

    if( !(prop in Ob1) || !deepEqual( Ob1[prop], Ob2[prop] ) )
      return false;
  }
  
  return propsOb1 === propsOb2;
}








// tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
