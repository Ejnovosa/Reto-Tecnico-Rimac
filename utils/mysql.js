var mysql = require('mysql2/promise');

module.exports = {
  async executeQuery(query, params) {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "admin123",
      port: "3306",
      database: "RetoTecnico",
    });
    try {
      connection.connect();
      const [rows] = await connection.query(query, params);
      return rows;
    } catch (error) {
      console.error("error", error);
      throw new Error(error.message);
    } finally {
      connection.end();
    }
  }
}
