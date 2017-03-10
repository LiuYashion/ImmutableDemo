

//var Immutable = require('immutable');
//
//var c = Immutable.hash(13)
//console.log(c)




const fetch = require('isomorphic-fetch')
const url = 'https://cnodejs.org/api/v1/topics'

fetch(url, {
	method: "GET",
  	mode: "cors",
  	headers: {
    	"Content-Type": "application/x-www-form-urlencoded"
  	},
  	body: ""
}).then(function(res) {
 	console.log(res.status)
}).catch(function(e) {
 	
});










