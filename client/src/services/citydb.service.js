import http from "../APIs/http-common.js";

class CitiesDatabaseService {
  getAll() {
    return http.get("/cities");
  }

  get(id) {
    return http.get(`/cities/${id}`);
  }

  create(data) {
    return http.post("/cities", data);
  }

  update(id, data) {
    return http.put(`/cities/${id}`, data);
  }

  delete(id) {
    return http.delete(`/cities/${id}`);
  }

  deleteAll() {
    return http.delete(`/cities`);
  }

  findByName(name) {
    return http.get(`/cities?name=${name}`);
  }
}
export default new CitiesDatabaseService();
