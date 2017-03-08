
var Immutable = require('immutable');



var map1 = Immutable.Map({a:1, b:1, c:1});
var map2 = Immutable.Map({a:1, b:1, c:1});


var temp1 = (map1 !== map2);
var temp2 = (Object.is(map1, map2));
var temp3 = (Immutable.is(map1, map2));

console.log(temp1)
console.log(temp2)
console.log(temp3)