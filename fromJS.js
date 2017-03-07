
var Immutable = require('immutable');

/**
 * { fromJS(json: any, reviver?: (k: any, v: Iterable<any, any>) => any): any }
 * 
 * {If reviver is not provided, the default behavior will convert Arrays into Lists and Objects into Maps.}
 */

//	键值有索引,可迭代.那么转成list.反之装成map
var test1 =	Immutable.fromJS({a: {b: [10, 20, 30]}, c: 40}, function (key, value) {
  var isIndexed = Immutable.Iterable.isIndexed(value);
  return isIndexed ? value.toList() : value.toOrderedMap();
});
//OrderedMap { "a": OrderedMap { "b": List [ 10, 20, 30 ] }, "c": 40 }

var test2 =	Immutable.fromJS({a: {b: [10, 20, 30]}, c: 40});

console.log( test2 )