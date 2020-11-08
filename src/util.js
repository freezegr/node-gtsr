const fetch = require('node-fetch');
const querystring = require('querystring');
const Ffmpeg = require('fluent-ffmpeg');
var ytdl = require('ytdl-core');
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
module.exports.search = search;