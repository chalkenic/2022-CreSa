import axios from "axios";
// API url for accessing weather for a specific location.
export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  headers: {
    "Content-type": "application/json",
  },
});
