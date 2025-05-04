const db = require("../database/pg.database");
const baseErr = require("../utils/baseError.util");

exports.register = async (r) => {
  try {
    if (!r.name || !r.email || !r.password) {
      return baseErr.blankFieldErr.id;
    }

    const c = await db.pool.connect();

    const q2 = await c.query("SELECT * FROM users WHERE email=$1", [r.email]);

    console.log("here");

    if (q2.rowCount > 0) {
      return baseErr.alreadyExistErr().id;
    }

    const q1 = await c.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [r.name, r.email, r.password]
    );

    return q1.rows;
  } catch (e) {
    return e;
  }
};

exports.login = async (r) => {
  try {
    if (!r.email || !r.password) {
      return baseErr.blankFieldErr.id;
    }

    const c = await db.pool.connect();

    const q1 = await c.query(
      "SELECT * FROM users WHERE email=$1 AND password=$2",
      [r.email, r.password]
    );

    if (q1.rowCount < 1) {
      return baseErr.notExistErr().id;
    }

    return q1.rows;
  } catch (e) {
    return e;
  }
};
