var readability = require(__dirname+'/lib/readability');
var htmlrequest = require(__dirname+'/htmlrequest');
var url = require('url');

var urlPath ="http://mashable.com/2012/07/31/holmies-tumblr/";

var urlObj = url.parse(urlPath);
/*
{ protocol: 'http:',
  slashes: true,
  host: 'mashable.com:80',
  port: '80',
  hostname: 'mashable.com',
  href: 'http://mashable.com:80/2012/07/31/holmies-tumblr/',
  pathname: '/2012/07/31/holmies-tumblr/',
  path: '/2012/07/31/holmies-tumblr/' }
  */

var port =urlObj.port;

if(port=="" || port == undefined)
{
    port = 80;
}

htmlrequest.getURL (urlObj.hostname,port,urlObj.path,"GET",function(html){
    doReadability(html);
});

function doReadability(html)
{
        readability.parse(html, urlPath, function(result) {
         console.log(result.title, result.content);
    });

}