const api = require('../index.js')
var option = {
	key: "AIzaSyAwgJH88EP7beGPpdbXg4qRjtFJ1vXtplc",
	maxResults: 2
	//type: "mp4"
}
api.te('free fire', option, (err, res) =>{
	if(err) throw err
	console.log(res)
})