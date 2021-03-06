var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=0cda549d800cac35d2242a16a360f0bd';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location),
        requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      if(res.cod && res.message) {
        throw new Error(res.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.response.data.message);
    });

  }
}
