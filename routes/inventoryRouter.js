const express = require("express");
const {
  getIndex,
  getGames,
  getGame,
  getCategories,
  getCategory,
  getNewGame,
  postNewGame,
  getNewCategory,
  postNewCategory,
  getUpdateGame,
  postUpdateGame,
} = require("../controllers/inventoryController");
const router = express.Router();

router.get("/", getIndex);
router.get("/games", getGames);
router.get("/games/new", getNewGame);
router.post("/games/new", postNewGame);
router.get("/games/:gameId", getGame);
router.get("/games/:gameId/update", getUpdateGame);
router.post("/games/:gameId/update", postUpdateGame);
router.get("/categories", getCategories);
router.get("/categories/new", getNewCategory);
router.post("/categories/new", postNewCategory);
router.get("/categories/:categoryId", getCategory);

module.exports = router;
