
var Immutable = require('immutable');

/**
 * { fromJS(json: any, reviver?: (k: any, v: Iterable<any, any>) => any): any }
 * 
 * {If reviver is not provided, the default behavior will convert Arrays into Lists and Objects into Maps.}
 */


var test1 =	Immutable.fromJS({a: {b: [10, 20, 30]}, c: 40}, function (key, value) {
  var isIndexed = Immutable.Iterable.isIndexed(value);
  return isIndexed ? value.toList() : value.toOrderedMap();
});
//OrderedMap { "a": OrderedMap { "b": List [ 10, 20, 30 ] }, "c": 40 }

var test2 =	Immutable.fromJS({a: {b: [10, 20, 30]}, c: 40});
//Map { "a": Map { "b": List [ 10, 20, 30 ] }, "c": 40 }

var test3 =	Immutable.fromJS([10, 20, 30]);
//List [ 10, 20, 30 ]

var test4 =	Immutable.fromJS({a:12, b:34, c:56});
//Map { "a": 12, "b": 34, "c": 56 }




















