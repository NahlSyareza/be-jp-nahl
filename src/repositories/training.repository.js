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

const addWord = async (r) => {
  try {
    const c = await db.pool.connect();

    const q1 = await c.query("INSERT INTO word VALUES ($1,$2,$3) RETURNING *", [
      r.latin,
      r.japanese,
      r.clf,
    ]);

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

    console.log(r.list);

    const q1 = await c.query(
      "INSERT INTO vocabulary_set (parent_set, japanese) SELECT $1, unnest($2::text[]) RETURNING *",
      [r.uuid, r.list]
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
  addVocabulary,
  addWord,
  createSet,
  getVocabularySet,
  addVocabularySet,
};
