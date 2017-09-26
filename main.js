var wifi = require('node-wifi');

function getDistance(freq,dbm) {
	return Math.pow(10,((27.55 - (20 * Math.log10(freq)) + Math.abs(dbm)) / 20.0));
}

wifi.init({
	iface:null
});

wifi.scan(function(err,networks) {
	if(err)
		console.log(err);
	else
		networks.forEach(function(data){
			console.log('SSID: ',data.ssid);
			console.log('Frequency: ',data.frequency);
			console.log('Signal Level: ',data.signal_level);
			console.log('Distance: ',getDistance(data.frequency,data.signal_level)+'m');
			console.log();
		});
});

