var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=1e964e5e157f51456e69caa7cfe5ac27';

// `` - (query string) new ES6 feature that lets inject variables in to string with ${} syntax

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		
		return (axios.get(requestUrl).then(function(response) {
			if(response.data.cod && response.data.message) {
				throw new Error(response.data.message);
			} else {
				if (response.data.name.toLowerCase() == location.toLowerCase()) {
					return response.data.main.temp;
				} else {
					throw new Error('City not found');
				}	
			}
			
		}, function(err) {
			
			throw new Error(err.response.data.message);
			
		}))
	
	}
}