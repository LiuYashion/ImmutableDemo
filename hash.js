

const fetch = require('isomorphic-fetch')
var Mock = require('mockjs')



Mock.mock('http://asdasdas.cn', {
    'name'     : '@name',
    'age|1-100': 100,
    'color'    : '@color'
});


fetch('http://asdasdas.cn', {
	method: "GET",
  	dataType:'json'
}).then(function(res) {
 	console.log(res)
}).catch(function(e) {
 	console.log(e)
});







