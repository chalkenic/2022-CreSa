import axios from "axios";
// Local storage base url for appending to database.
export default axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-type": "application/json",
  },
});
