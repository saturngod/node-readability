exports.getURL= function(url,port,path,method,callback) {

var http = require('http');

    var options = {
  host: url,
  port: port,
  path: path,
  method: method
    };

    var req = http.request(options, function(res) {
         console.log('STATUS: ' + res.statusCode);
          console.log('HEADERS: ' + JSON.stringify(res.headers));
          res.setEncoding('utf8');
          var chunkdata = "";
          res.on('data', function (chunk) {
                //get data
                chunkdata +=chunk;
          });

          res.on('end',function(){
            callback(chunkdata);
          })

    });


    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });

    req.end();

}

