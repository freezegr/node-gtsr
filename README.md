<h1 align="center">Welcome to node-ytsr 👋</h1>
<p align="center">
  <img src="https://img.shields.io/npm/v/@freezegold/node-ytsr?orange=blue" />
  <a href="https://www.npmjs.com/package/@freezegold/node-ytsr">
    <img alt="downloads" src="https://img.shields.io/npm/dm/@freezegold/node-ytsr.svg?color=blue" target="_blank" />
  </a>
  <a href="https://github.com/freezegr/insta.js/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://github.com/freezegr/gitmoji-changelog">
    <img src="https://img.shields.io/badge/changelog-gitmoji-brightgreen.svg" alt="gitmoji-changelog">
  </a>
</p>

## Instaletion 

`npm i @freezegole/node-ytsr --save`

## google api key 

if you don't have any google api key [click here](#https://developers.google.com/maps/documentation/javascript/get-api-key?utm_source=google&utm_medium=cpc&utm_campaign=FY20-Q3-global-demandgen-displayonnetworkhouseads-cs-GMP_maps_contactsal_saf_v2&utm_content=text-ad-none-none-DEV_t-CRE_434785623338-ADGP_Hybrid%20%7C%20AW%20SEM%20%7C%20BKWS%20~%20Brand%20%7C%20EXA%20%7C%20Google%20Maps%20API%20Key-KWID_43700053663474831-aud-559916008220%3Akwd-2615963921-userloc_9067697&utm_term=KW_google%20maps%20api%20key-ST_google%20maps%20api%20key&&gclid=CjwKCAiAqJn9BRB0EiwAJ1SztTaTdLgj9JMRwesuF5pVMLCukiCxahdR7rZ0wO-7wuJzUP08SDJTtRoCUboQAvD_BwE)

## example

```js
const ytsr = require('@freezegold/node-ytsr');

var option = {
	key: "your goolge api key",
	maxResults: 2 //default = 1
}
ytsr.search('music', option).then(res=>{
	console.log(res)
})
```