/* const axios = require("axios"); */

class APIHandler {
  constructor(BASE_URL) {
    this.BASE_URL = BASE_URL;
    this.api = axios.create({
      baseURL: this.BASE_URL,
    });
  }

  getFullList = () => {
    return this.api.get("/characters");
  };

  getOneRegister = (id) => {
    return this.api.get(`/characters/${id}`);
  };

  createOneRegister = (character) => {
    return this.api.post(`/characters`, character);
  };

  updateOneRegister = (id, updatedInfo) => {
    return this.api.put(`/characters/${id}`, updatedInfo);
  };

  deleteOneRegister = (id) => {
    return this.api.delete(`/characters/${id}`);
  };
}
