var request = require('request'),
    io = require('socket.io');

function Api (version, host){
  Api.prototype.ApiVersion = version;
  Api.prototype.ApiHost = host;
};
// Pass in Api version and Api Host

  Api.prototype.Get = function(path, socket, se) {
    var options = {
      url: this.ApiHost + this.ApiVersion + path,
      method: 'GET',
      json: true
    };
    // Set URI options for request
    console.log('URI: ' + options.url);
    // Print URI in terminal
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        socket.emit(se, body);
      }
    // Make GET request to Api
    // -  If successful, emit the passed socket emitter 'se' 
    //    with the data
    });
  }

var api = new Api('v1', 'http://localhost:8800/api/');
// New instance with an API version and host URI

module.exports = api;
// Export api variable for use in 'app.js'