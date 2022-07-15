const fetch = require('node-fetch');

class WeatherService {
  constructor() {
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    this.apiKey = process.env.WEATHER_API_KEY;
  }

  getWeather(request, response) {
    const { longitude, latitude } = request.body;

    if (!longitude || !latitude) {
      return response.status(400).send({ error: 'longitude and latitude should be defined' });
    }

    fetch(`${this.apiUrl}?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`)
      .then(res => res.json())
      .then(data => response.status(200).send(data));
  }
}

module.exports = { WeatherService };
