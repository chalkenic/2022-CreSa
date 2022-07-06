import weather from "../APIs/http-open-weather-map.js";
import countries from "../APIs/http-rest-countries.js";

class CitiesApiService {
  getCountry(country) {
    var countryData = countries.get(`/capital/${country}`);
    // var weather = weather.get(`lat=${cityData.}`)
    return countryData;
  }

  getWeather(lat, lon) {
    const apiKey = "d0521b2f01034dcf63a9bb461c352171";
    var weatherData = weather.get(`/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    return weatherData;
  }
}
export default new CitiesApiService();
