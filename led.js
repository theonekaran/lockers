var wpi = require('wiring-pi');
var express = require('express')
var app = express()
 
app.get('/pin/:pin/output/:output', function (req, res) {

var configPin = parseInt(req.params.pin,10);
console.log(configPin);
//var configPin11 = 7;
// Blinking interval in usec
//var configTimeout = 1000;

wpi.setup('wpi');
wpi.pinMode(configPin, wpi.OUTPUT);
//wpi.pinMode(configPin11, wpi.OUTPUT);

var isLedOn = +req.params.output;
wpi.digitalWrite(configPin, isLedOn );
  res.send('Hello World'+req.params.pin)
})

app.get('/', function(req, res) {
	res.render('index.ejs');
});
 
app.listen(3000)

// GPIO pin of the led


/*setInterval(function() {
	isLedOn = +!isLedOn;
	//isLedOn = !isLedOn;
	console.log('isLedOn: ' + isLedOn);
	wpi.digitalWrite(configPin, isLedOn );
	wpi.digitalWrite(configPin11, (+!isLedOn) );
}, configTimeout);*/