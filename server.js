//server MQTT
var mosca = require('mosca');
var settings = {
		port:8888
		}

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published: ', packet.payload, packet.topic);
});

server.authenticate = function (client, username, password, callback) {
    console.log("ClientId: ", client.id);
    console.log("Username: ", username);
    console.log("password: ", password);
    if(username == 'khanhxxx' && password == '123456'){
        // To authenticate
        callback(null, true);
    }else{
        // To reject
        callback(null, false);
    }
 }

server.on('ready', setup);

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running');
}