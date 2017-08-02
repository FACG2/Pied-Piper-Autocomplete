var fs = require('fs');
const countr = require('../lib/countries.json');
const UniPath = require('../lib/count_uni.json');
function matchedCountry(queryKey, cb) {
  var cntrs = '';

      // console.log(typeof countr);
      var result = countr.filter(function(country){
        if(JSON.stringify(country).toLowerCase().indexOf(queryKey.toLowerCase()) === 1){
        return country;
      }
      });
      cb(null, result);

  }

function matchUni(queryUni , country, cb){
  var universties = '';
  // fs.readFile(Uni_path, function(err, data) {
  //   if (err) {
  //     cb(err);
  //   } else {
  //     ;
      var uniList=[];

      var result = UniPath.reduce(function(previUni , uni){
        // console.log('hhhh',JSON.stringify(uni));
        ;
        if(uni.country.toLowerCase() == country.toLowerCase()){
        return uniList.push(uni);}
      })

      var res=uniList.filter(function(university){
        // console.log(university.name.toLowerCase().indexOf);
        return university.name.toLowerCase().startsWith(queryUni.toLowerCase());
      }).map(function(uniObj) {
        return uniObj.name;
      });

      // console.log(typeof res);
      cb(null, res);
      }


function findUni(universityName,cb){
      var result=UniPath.filter((university)=>
      {
        if(university.name.toLowerCase().trim() == universityName.toLowerCase().trim())
        return university;
      }
    );
    cb(result);
}
