/*
URL module : provides methods for working with URLs:
with this method we can easily parse the different components of url
*/

const { log } = require('console')
const url=require('url')

//example url
const urlString="https://nodejs.org/dist/latest-v18.x/docs/api/path.html"

//parsing the url
const parsedUrl=url.parse(urlString,true)

console.log(parsedUrl)

//accessing the url components 

console.log("Protocol:"+parsedUrl.protocol);
console.log("Host:"+parsedUrl.host);
console.log("Path:"+parsedUrl.path);
console.log(`Query Params:${JSON.stringify(parsedUrl.query)}`)

//formating the url
const formattedUrl=url.format({
    protocol:"https",
    host:'www.codemind.com',
    port:8080,
    pathname:"/path/to/resource",
    query:{
        param1:"value1",
        param2:"value2",
    }
})

console.log("Formatted URL:"+formattedUrl)