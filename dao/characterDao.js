const axios = require("axios");

module.exports = {
  async getCharacters(params) {
    try {
      const response = await axios.get("https://swapi.py4e.com/api/people", {
        params,
      });

      return response.data.results;
    } catch (error) {
      console.error(`errorcito`, error);
      throw new Error();
    }
  },
};
