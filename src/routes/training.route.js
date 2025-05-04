const express = require("express");
const router = express.Router();
const controller = require("../controllers/training.controller");

router.get("/getAllVocabulary", controller.getAllVocabulary);
router.get("/getVocabularyLatin", controller.getVocabularyLatin);
router.get("/getVocabularyJapanese", controller.getVocabularyJapanese);
router.get("/getVocabularyEnglish", controller.getVocabularyEnglish);
router.post("/addVocabulary", controller.addVocabulary);
router.post("/addLetter", controller.addLetter);
router.delete("/deleteVocabulary", controller.deleteVocabulary);
router.delete("deleteLetter", controller.deleteLetter);
router.post("/createSet", controller.createSet);
router.get("/getVocabularySet", controller.getVocabularySet);
router.post("/addVocabularySet", controller.addVocabularySet);
router.post("/addLetterSet", controller.addLetterSet);
router.delete("/deleteVocabularySet", controller.deleteVocabularySet);
router.delete("/deleteLetterSet", controller.deleteLetterSet);

module.exports = router;
