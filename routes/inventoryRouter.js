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
  getDeleteGame,
  getDeleteCategory,
} = require("../controllers/inventoryController");
const router = express.Router();
const validateGame = require("../validators/gameValidator");
const validateCategory = require("../validators/categoryValidator");

router.get("/", getIndex);
router.get("/games", getGames);
router.get("/games/new", getNewGame);
router.post("/games/new", validateGame, postNewGame);
router.get("/games/:gameId", getGame);
router.get("/games/:gameId/update", getUpdateGame);
router.get("/games/:gameId/delete", getDeleteGame);
router.post("/games/:gameId/update", validateGame, postUpdateGame);
router.get("/categories", getCategories);
router.get("/categories/new", getNewCategory);
router.post("/categories/new", validateCategory, postNewCategory);
router.get("/categories/:categoryId", getCategory);
router.get("/categories/:categoryId/delete", getDeleteCategory);

module.exports = router;
