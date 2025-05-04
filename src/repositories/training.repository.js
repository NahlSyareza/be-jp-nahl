const db = require("../database/pg.database");
const baseErr = require("../utils/baseError.util");

const getAllVocabulary = async () => {
  try {
    const c = await db.pool.connect();

    const q1 = await c.query("SELECT * FROM vocabulary");

    return q1.rows;
  } catch (e) {
    return e;
  }
};

const getVocabularyLatin = async (r) => {
  try {
    const c = await db.pool.connect();

    const q1 = await c.query("SELECT * FROM vocabulary WHERE latin=$1", [
      r.input,
    ]);

    return q1.rows;
  } catch (e) {
    return e;
  }
};

const getVocabularyJapanese = async (r) => {
  try {
    const c = await db.pool.connect();

    const q1 = await c.query("SELECT * FROM vocabulary WHERE japanese=$1", [
      r.input,
    ]);

    return q1.rows;
  } catch (e) {
    return e;
  }
};

const getVocabularyEnglish = async (r) => {
  try {
    const c = await db.pool.connect();

    const q1 = await c.query("SELECT * FROM vocabulary WHERE english=$1", [
      r.input,
    ]);

    return q1.rows;
  } catch (e) {
    return e;
  }
};

const getVocabularyRandom = async (r) => {
  try {
    const c = await db.pool.connect();

    console.log(r.limit);

    const q1 = await c.query(
      "SELECT * FROM vocabulary ORDER BY RANDOM() LIMIT $1",
      [r.limit]
    );

    return q1.rows;
  } catch (e) {
    return e;
  }
};

const addVocabulary = async (r) => {
  try {
    const c = await db.pool.connect();

    const q1 = await c.query(
      "INSERT INTO vocabulary VALUES ($1,$2,$3) RETURNING *",
      [r.latin, r.japanese, r.english]
    );

    return q1.rows;
  } catch (e) {
    return e;
  }
};

const addLetter = async (r) => {
  try {
    const c = await db.pool.connect();

    const q1 = await c.query(
      "INSERT INTO letter VALUES ($1,$2,$3) RETURNING *",
      [r.latin, r.japanese, r.clf]
    );

    return q1.rows;
  } catch (e) {
    return e;
  }
};

const deleteVocabulary = async (r) => {
  try {
    const c = await db.pool.connect();

    const q1 = await c.query(
      "DELETE FROM vocabulary WHERE japanese=$1 RETURNING *",
      [r.japanese]
    );

    return q1.rows;
  } catch (e) {
    return e;
  }
};

const deleteLetter = async (r) => {
  try {
    const c = await db.pool.connect();

    const q1 = await c.query(
      "DELETE FROM letter WHERE japanese=$1 RETURNING *",
      [r.japanese]
    );

    return q1.rows;
  } catch (e) {
    return e;
  }
};

const createSet = async (r) => {
  try {
    const c = await db.pool.connect();

    const q1 = await c.query("INSERT INTO set (name) VALUES ($1) RETURNING *", [
      r.name,
    ]);

    return q1.rows;
  } catch (e) {
    return e;
  }
};

const getVocabularySet = async (r) => {
  try {
    const c = await db.pool.connect();

    const q1 = await c.query(
      "SELECT * FROM vocabulary_set WHERE parent_set=$1",
      [r.parent_set]
    );

    return q1.rows;
  } catch (e) {
    return e;
  }
};

const addVocabularySet = async (r) => {
  try {
    const c = await db.pool.connect();

    const q1 = await c.query(
      "INSERT INTO vocabulary_set (parent_set,item) VALUES ($1,$2) RETURNING *",
      [r.uuid, r.item]
    );

    return q1.rows;
  } catch (e) {
    return e;
  }
};

const addLetterSet = async (r) => {
  try {
    const c = await db.pool.connect();

    const q1 = await c.query(
      "INSERT INTO letter_set (parent_set,item) VALUES ($1,$2) RETURNING *",
      [r.uuid, r.item]
    );

    return q1.rows;
  } catch (e) {}
};

const deleteVocabularySet = async (r) => {
  try {
    const c = await db.pool.connect();

    const q1 = await c.query(
      "DELETE FROM vocabulary_set WHERE parent_set=$1 AND item=$2 RETURNING *",
      [r.uuid, r.item]
    );

    return q1.rows;
  } catch (e) {
    return e;
  }
};

const deleteLetterSet = async (r) => {
  try {
    const c = await db.pool.connect();

    const q1 = await c.query(
      "DELETE FROM letter_set WHERE parent_set=$1 AND item=$2 RETURNING *",
      [r.uuid, r.item]
    );

    return q1.rows;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllVocabulary,
  getVocabularyLatin,
  getVocabularyJapanese,
  getVocabularyEnglish,
  getVocabularyRandom,
  addVocabulary,
  addLetter,
  deleteVocabulary,
  deleteLetter,
  createSet,
  getVocabularySet,
  addVocabularySet,
  addLetterSet,
  deleteVocabularySet,
  deleteLetterSet,
};
