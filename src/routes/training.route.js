const express = require("express");
const router = express.Router();
const controller = require("../controllers/training.controller");

router.get("/getAllVocabulary", controller.getAllVocabulary);
router.get("/getVocabularyLatin", controller.getVocabularyLatin);
router.get("/getVocabularyJapanese", controller.getVocabularyJapanese);
router.get("/getVocabularyEnglish", controller.getVocabularyEnglish);
router.get("/getVocabularyRandom", controller.getVocabularyRandom);
router.post("/addVocabulary", controller.addVocabulary);
router.post("/addLetter", controller.addLetter);
router.delete("/deleteVocabulary", controller.deleteVocabulary);
router.delete("deleteLetter", controller.deleteLetter);
router.post("/createSet", controller.createSet);
router.post("/getVocabularySet", controller.getVocabularySet);
router.post("/addVocabularySet", controller.addVocabularySet);
router.post("/addLetterSet", controller.addLetterSet);
router.delete("/deleteVocabularySet", controller.deleteVocabularySet);
router.delete("/deleteLetterSet", controller.deleteLetterSet);
router.get("/getAllSet", controller.getAllSet);
router.delete("/deleteSet", controller.deleteSet);

module.exports = router;
