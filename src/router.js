var fs = require('fs');
var handlers = require('./handler.js');

function router(req, res){
  var url = req.url;
  console.log(url)
 
  if (url === '/') {
    handlers.homeHandler(req, res);
  } 

  if(url.startsWith('/public')){
  	console.log(url);
  	handlers.publicHandler(req,res);
  }else if(url.startsWith('/?q=')){
  	handlers.ServeApi(req ,res);}
  	
}
module.exports = router;
