import axios from "axios";
// API URL for accessing country information based on provided city.
export default axios.create({
  baseURL: "https://restcountries.com/v3.1",
  headers: {
    "Content-type": "application/json",
  },
});
