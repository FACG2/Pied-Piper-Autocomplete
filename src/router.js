var fs = require('fs');
var handlers = require('./handler.js');

function router(req, res){
  var url = req.url;
 
  if (url === '/') {
    handlers.homeHandler(req, res);
  }else if(url.startsWith('/public')){
  	handlers.publicHandler(req,res);
  }else if(url.startsWith('Api/uni/?q=')){
  	handlers.ServeApi(req ,res);}
  	else if (url.startsWith('Api/country/?q=')){
  	handlers.ServeApi(req ,res);}	
  }
module.exports = router;
