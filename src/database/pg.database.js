require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
});

const connect = async () => {
  try {
    await pool.connect();
    console.log("El konek");
  } catch (e) {
    console.error(`Error el konek: ${e}`);
  }
};

connect();

const query = async (text, params) => {
  try {
    const res = await pool.query(text, params);
    return res;
  } catch (e) {
    console.error(`Error executing query: ${e}`);
  }
};

module.exports = {
  query,
  pool,
};
