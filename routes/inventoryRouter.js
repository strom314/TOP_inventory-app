const express = require("express");
const { getIndex, getGames, getGame, getCategories, getCategory, getNewFormPage, postNew } = require("../controllers/inventoryController");
const router = express.Router();

router.get("/", getIndex);
router.get("/games", getGames);
router.get("/games/:gameId", getGame);
router.get("/categories", getCategories);
router.get("/categories/:categoryId", getCategory);
router.get("/new", getNewFormPage);
router.post("/new", postNew);

module.exports = router;
