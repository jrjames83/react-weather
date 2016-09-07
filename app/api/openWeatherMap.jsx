var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=0bbf7572880155f0d500eca39a583571&units=imperial';

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message)
				console.log("axios error 1")
			} else {
				console.log("axiso worked",res.data.main.temp);
				return res.data.main.temp;
			}
		}, function(res) {
			console.log("axiso error 2")
			throw new Error(res.data.message);
		});

	}
}