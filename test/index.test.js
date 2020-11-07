const api = require('../index.js')
var option = {
	key: "secret",
	maxResults: 2
}
api.download('free fire', option)/*.then(res=>{
	console.log(res)
})*/