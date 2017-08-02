var request = (function () {
  function _request (url, cb) {
    var xhr = new XMLHttpRequest();
    var payloadString = JSON.stringify(payload);
    //   http://huroku/../api/coun/q?=us

    url = url+document.getElementById('input');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          cb(null, JSON.parse(xhr.responseText));
        } else {
          cb(true);
        }
      }
    };
    xhr.open('GET', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
  };



})();




