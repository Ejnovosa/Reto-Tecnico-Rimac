const axios = require("axios");
const characterDao = require("../dao/characterDao");

module.exports = {
  async getCharacters(payload) {
    let params = {};
    if (payload) {
      params = { name: payload.nombre };
    }
    const results = await characterDao.getCharacters(params);
    const data = results.map((item) => {
      return {
        nombre: item.name,
        altura: item.height,
        colorOjos: item.eye_color,
        cumpleanio: item.birth_Year,
        genero: item.gender,
        peliculas: item.films,
      };
    });
    return data;
  },
};
