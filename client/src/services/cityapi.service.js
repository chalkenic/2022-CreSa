import weather from "../APIs/http-open-weather-map.js";
import countries from "../APIs/http-rest-countries.js";

class CitiesApiService {
  get(country) {
    var concatData = {};
    var countryData = countries.get(`/name/${country}`);
    console.log(countryData);
    // var weather = weather.get(`lat=${cityData.}`)
    return countryData;
  }
}
export default new CitiesApiService();
