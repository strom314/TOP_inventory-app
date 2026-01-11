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

router.get("/", getIndex);
router.get("/games", getGames);
router.get("/games/new", getNewGame);
router.post("/games/new", postNewGame);
router.get("/games/:gameId", getGame);
router.get("/games/:gameId/update", getUpdateGame);
router.get("/games/:gameId/delete", getDeleteGame);
router.post("/games/:gameId/update", postUpdateGame);
router.get("/categories", getCategories);
router.get("/categories/new", getNewCategory);
router.post("/categories/new", postNewCategory);
router.get("/categories/:categoryId", getCategory);
router.get("/categories/:categoryId/delete", getDeleteCategory);

module.exports = router;
