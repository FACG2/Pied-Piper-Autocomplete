var fs = require('fs');
var savPath = __dirname + '/lib/countries.json';
var srcPath = __dirname + '/lib/count_uni.json';




function getData(srcPath, cb) {

fs.readFile(srcPath, 'utf8', function (err, data) {
        if (err)
        console.log(err);
        else {

          cb(savPath ,JSON.parse(data));
        }
        }
    );
}


function writeTextFile(filepath, output) {

}
getData(srcPath ,()=> {
  var txtFile = new File(filepath);
  txtFile.open("w");
  data.reduce((acum , uniObj)=>{
    if(acum !== uniObj.country){
      txtFile.writeln(uniObj.country+',');
    return uniObj.country;
  }
  },{});
   //

	txtFile.close();
});
