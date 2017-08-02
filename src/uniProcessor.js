var fs = require('fs');
var CountPath = __dirname + '/../lib/countries.json';
var Uni_path = __dirname + '/../lib/count_uni.json';


function matchedCountry(queryKey, cb) {
  var cntrs = '';
  fs.readFile(CountPath, function(err, data) {

    if (err) {
      cb(err);
    } else {
      cntrs = JSON.parse(data);
      var result = cntrs.filter(function(country)) {
        return country.indexOf(queryKey) !== -1;
      }
      cb(null, result);
      }
    })
  }
}
function matchUni(queryUni , country, cb){
  var universties = '';
  fs.readFile(Uni_path, function(err, data) {
    if (err) {
      cb(err);
    } else {
      universties = JSON.parse(data);
      var result = universties.reduce(function(uniLst,uni){
        if(uni.country == queryKey)
        return uni.name;
      },{})
      .filter(function(university)) {
        return university.indexOf(queryUni) !== -1;
      }

      cb(null, result);
      }
    })
}
function findUni(universityId ,cb){
  var universties = '';
  fs.readFile(Uni_path, function(err, data) {
    if (err) {
      cb(err);
    } else {
      universties = JSON.parse(data);
      var result = universties.find((uni) => {
        return uni.domain === universityId;
      });
      }
    })
}
