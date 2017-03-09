var mqtt = require('mqtt')

var client  = mqtt.connect('tcp://127.0.0.1:1883', {username : 'iot', password : 'iot'})

// Send X message on connection on the 'iot' topic and then close the client
client.on('connect', function () {
	for(var i = 0 ; i < 100 ; i++) {
		var message = JSON.stringify({message : "Sending message " + i, index : i});
		console.log("Sending message : " + message);
		client.publish('iot', message);
	}
	client.end();
})
