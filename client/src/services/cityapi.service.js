import weather from "../APIs/http-open-weather-map.js";
import countries from "../APIs/http-rest-countries.js";

// Accessible functions for calling API methods needed in application.
class CitiesApiService {
  getCountry(country) {
    var countryData = countries.get(`/capital/${country}`);
    return countryData;
  }

  getWeather(lat, lon) {
    const apiKey = "d0521b2f01034dcf63a9bb461c352171";
    var weatherData = weather.get(
      `/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );
    return weatherData;
  }
}
export default new CitiesApiService();
