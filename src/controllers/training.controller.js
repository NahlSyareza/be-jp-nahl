const baseRes = require("../utils/baseResponse.util");
const baseErr = require("../utils/baseError.util");

const repository = require("../repositories/training.repository");

const getAllVocabulary = async (req, res) => {
  try {
    const q = await repository.getAllVocabulary();

    return baseRes(res, true, 200, "Retrieved all vocabulary!", q);
  } catch (e) {
    return baseRes(res, false, 500, `Error: ${e}`, null);
  }
};

const getVocabularyLatin = async (req, res) => {
  try {
    const q = await repository.getVocabularyLatin(req.body);

    return baseRes(res, true, 200, "Retrieved vocabulary via latin!", q);
  } catch (e) {
    return baseRes(res, false, 500, `Error: ${e}`, null);
  }
};

const getVocabularyJapanese = async (req, res) => {
  try {
    const q = await repository.getVocabularyJapanese(req.body);

    return baseRes(res, true, 200, "Retrieved vocabulary via japanese!", q);
  } catch (e) {
    return baseRes(res, false, 500, `Error: ${e}`, null);
  }
};

const getVocabularyEnglish = async (req, res) => {
  try {
    const q = await repository.getVocabularyEnglish(req.body);

    return baseRes(res, true, 200, "Retrieved vocabulary via english!", q);
  } catch (e) {
    return baseRes(res, false, 500, `Error: ${e}`, null);
  }
};

const addVocabulary = async (req, res) => {
  try {
    const q = await repository.addVocabulary(req.query);

    return baseRes(res, true, 200, "Added new entry!", q);
  } catch (e) {
    return baseRes(res, false, 500, `Error: ${e}`, null);
  }
};

const addWord = async (req, res) => {
  try {
    const q = await repository.addWord(req.query);

    return baseRes(res, true, 200, "Added new word!", q);
  } catch (e) {
    return baseRes(res, false, 500, `Error: ${e}`, null);
  }
};

const createSet = async (req, res) => {
  try {
    const q = await repository.createSet(req.query);

    return baseRes(res, true, 200, "Created new set!", q);
  } catch (e) {
    return baseRes(res, false, 500, `Error: ${e}`, null);
  }
};

const getVocabularySet = async (req, res) => {
  try {
    const q = await repository.getVocabularySet(req.body);

    return baseRes(res, true, 200, "Get vocabularies from set", q);
  } catch (e) {
    return baseRes(res, false, 500, `Error: ${e}`, null);
  }
};

const addVocabularySet = async (req, res) => {
  try {
    const q = await repository.addVocabularySet(req.body);

    return baseRes(res, true, 200, "Added vocabulary to set!", q);
  } catch (e) {
    return baseRes(res, false, 500, `Error: ${e}`, null);
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
