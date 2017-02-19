var mqtt = require('mqtt')

var client  = mqtt.connect('tcp://127.0.0.1:1883', {username : 'iot', password : 'iot'})

// Suscribe to IoT topic at connection
client.on('connect', function () {
	client.subscribe('iot');
})

// Log the received message
client.on('message', function (topic, message) {
	console.log(message.toString())
})
