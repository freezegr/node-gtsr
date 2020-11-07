const api = require('../index.js')
var option = {
	key: "AIzaSyAwgJH88EP7beGPpdbXg4qRjtFJ1vXtplc",
	maxResults: 2
}
api.search('amv', option).then(res=>{
	console.log(res)
})
