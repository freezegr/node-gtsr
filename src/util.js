const fetch = require('node-fetch');
const querystring = require('querystring');
var youtubedl = require('youtube-dl');
var path = require('path');
var fs = require('fs');

const search = function(term, option){
	if(!term) throw new Error(new Error(`Couldn't fetch the api: no term`))
	if(!option.key) throw new Error(new Error(`Couldn't fetch the api: No google api key`))
	if(!option.maxResults) option.maxResults = 1
	if(option.maxResults == 0) option.maxResults = 1 
	
	return new Promise(function(resolve, reject){
    var paraments = {
      q: term, 
      part: 'snippet',
      maxResults: option.maxResults,
      key: option.key
    }
    fetch('https://www.googleapis.com/youtube/v3/search?' + querystring.stringify(paraments))
    .then(results => results.json())
    .then(res=> {
      var results = res.items.map(function(item) {
        var id = ''
        var url = ''
        switch (item.id.kind) {
          case 'youtube#channel':
            url = 'https://www.youtube.com/channel/' + item.id.channelId
            id = item.id.channelId
            break
          case 'youtube#playlist':
            url = 'https://www.youtube.com/playlist?list=' + item.id.playlistId
            id = item.id.playlistId
            break
          default:
            url = 'https://www.youtube.com/watch?v=' + item.id.videoId
            id = item.id.videoId
            break
        }
        return {
        	 kind: item.id.kind,
          id: id,
          url: url,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnails: item.snippet.thumbnails,
          channelId: item.snippet.channelId,
          publishedAt: item.snippet.publishedAt,
          channelTitle: item.snippet.channelTitle
        }
        
      })
     resolve(results) 
    })
    .catch(err => reject(new Error(`Couldn't fetch the api: ${err}`)));
  })
}
module.exports.download = function(term, option){
  if(!term) throw new Error(new Error(`Couldn't fetch the api: no term`))
  if(!option.key) throw new Error(new Error(`Couldn't fetch the api: No google api key`))
  if(!option.maxResults) option.maxResults = 1
  if(!option.type) option.type = 'mp3'
  if(option.maxResults == 0) option.maxResults = 1 
  search(term, option).then(result =>{
    const res = result[0]
    if(res.kind == 'youtube#channel') return console.log('is channel ')
    console.log(res)
    const video = youtubedl(res.url, ['--format=18'], { cwd: __dirname });
    const videoPath = path.resolve(__dirname, 'downloaded', res.title + '.mp4');
    video.pipe(fs.createWriteStream(videoPath));
  });
}
module.exports.search = search;