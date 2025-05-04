const express = require("express");
const router = express.Router();
const controller = require("../controllers/training.controller");

router.get("/getAllVocabulary", controller.getAllVocabulary);
router.get("/getVocabularyLatin", controller.getVocabularyLatin);
router.get("/getVocabularyJapanese", controller.getVocabularyJapanese);
router.get("/getVocabularyEnglish", controller.getVocabularyEnglish);
router.post("/addVocabulary", controller.addVocabulary);
router.post("/addWord", controller.addWord);
router.post("/createSet", controller.createSet);
router.get("/getVocabularySet", controller.getVocabularySet);
router.post("/addVocabularySet", controller.addVocabularySet);

module.exports = router;
