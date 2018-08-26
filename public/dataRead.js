/*
 * Thomas @ SAP
*/

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

getSensorData = function (deviceId, sensorId) {
//  getJSON('/sensorData?building=' + building + '&floor=' + floor + '&sensor=' + sensorId + '&debug=' + debug,
//getJSON('/sensorData?sensorId=' + sensorId + '&deviceId=' + deviceId + '&debug=' + debug,
getJSON('https://dsappv2.cfapps.eu10.hana.ondemand.com/hckthnData',
      function(err, data) {
      if (err !== null || data === null) {
          if (data === null) {
              //document.write('<H2>' + 'No data found for building: ' + building + " and floor: " + floor + "</H2>");
          } else {
              alert('Something went wrong: ' + err);
          }
      } else {
        console.log(' ---- ----');
        console.log(data);
      }
  });
}
