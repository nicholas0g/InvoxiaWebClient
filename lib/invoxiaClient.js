var axios=require('axios');

exports.getDeviceList=(auth,callback)=>{
    var basicAuth="Basic "+auth;
    axios.get('https://labs.invoxia.io/devices', {
        headers: { 'Authorization': basicAuth }
      }).then(function(response) {
        callback(true,response.data);
      }).catch(function(error) {
        callback(false,"Deauth");
        console.log('Error on Authentication');
      });
}

exports.getDeviceHistory=(auth,id,callback)=>{
    var basicAuth="Basic "+auth;
    axios.get('https://labs.invoxia.io/devices/'+id+'/tracker_data', {
        headers: { 'Authorization': basicAuth }
      }).then(function(response) {
        callback(true,response.data);
      }).catch(function(error) {
        callback(false,"Deauth");
        console.log('Error on Authentication');
      });
}

exports.getDeviceInfo=(auth,id,callback)=>{
    var basicAuth="Basic "+auth;
    axios.get('https://labs.invoxia.io/devices/'+id,{
        headers: { 'Authorization': basicAuth }
      }).then(function(response) {
        callback(true,response.data);
      }).catch(function(error) {
        callback(false,"Deauth");
        console.log('Error on Authentication');
      });
}

