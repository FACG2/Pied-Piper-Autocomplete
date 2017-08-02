const http = require('http');
const fs = require('fs');
const path = require('path');
const pros = require('./uniProcessor.js')
var contentTypes = {
  css:'text/css',
  js:'application/javascript',
  html:'text/html',
  jpg:'image/jpg'
}

function homeHandler(req, res){
  fs.readFile(path.join(__dirname, '../public/index.html'), 'utf8', (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(file);
      }
    });

}

function publicHandler(req, res){
  var url = req.url;
  var parts = url.split(".");
  var fileExtention = parts[parts.length - 1];
  console.log(url);
  fs.readFile(path.join(__dirname, '../' + url), (err, file) => {
      /* istanbul ignore if */
      if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': contentTypes[fileExtention]});
        res.end(file);
      }
    });
}

function notFoundHandler(req, res){
  res.writeHead(404, {'content-type': 'text/plain'});
  res.end('404 server error');
}

function jsonHandler(req, res){
  var url = req.url;
  var parts = url.split('/');
  var jsonExtention = parts[parts.length - 1];
  res.writeHead(200, {'content-type': 'application/json'});
  res.end(JSON.stringify(repos.jsonExtention));
  
}


function serveApi(req,res){
  var url=req.url;
  var parts = req.url.split("=");
  var query = parts[parts.length - 1];
  if(url.startsWith('/api/country?q=')){
  pros.matchedCountry(query, (err, result)=>{
        if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': 'applicatin/json'});
        res.end(result);
      }
  });
  }else if(url.startsWith('/api/uni?q=')) {
    pros.matchedUni(query , (err, result)=>{
        if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
      } else {
        res.writeHead(200, {'content-type': 'applicatin/json'});
        res.end(result);
      }
  });
  }

}
module.exports = {
  homeHandler:homeHandler,
  publicHandler:publicHandler,
  // notFoundHandler:notFoundHandler,
  // jsonHandler:jsonHandler
};
