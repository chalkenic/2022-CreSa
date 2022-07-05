import weather from "../APIs/http-open-weather-map.js";
import countries from "../APIs/http-rest-countries.js";

class CitiesApiService {
  get(city) {
    var concatData = {};
    var cityData = countries.get(`/name/${city}`);
    // var weather = weather.get(`lat=${cityData.}`)
    concatData.push({ city: cityData });
    return concatData;
  }
}
export default new CitiesApiService();
