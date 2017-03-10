

//var Immutable = require('immutable');
//
//var c = Immutable.hash(13)
//console.log(c)




import fetch from 'isomorphic-fetch'

fetch(url, {
	method: "POST",
  	mode: "no-cors",
  	headers: {
    	"Content-Type": "application/x-www-form-urlencoded"
  	},
  	body: "请求参数"
}).then(function(res) {
 	console.log("Response succeeded?", JSON.stringify(res.ok));
 	console.log(JSON.stringify(res));
}).catch(function(e) {
 	console.log("fetch fail", JSON.stringify(params));
});










