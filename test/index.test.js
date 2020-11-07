const api = require('../index.js')
var option = {
	key: "secret",
	maxResults: 2
}
api.search('amv', option).then(res=>{
	console.log(res)
})
