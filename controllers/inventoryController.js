const db = require("../db/query");
const { matchedData, validationResult } = require("express-validator");

function getIndex(req, res) {
  res.render("index");
}

async function getGames(req, res) {
  const games = await db.getAllGames();

  res.render("games", { games: games });
}
async function getGame(req, res) {
  const gameArr = await db.getGame(req.params.gameId);
  const game = gameArr[0];
  const categoryArr = await db.getCategory(game.category_id);
  const category = categoryArr[0] || { title: "missing" };

  res.render("game", { game: game, category: category });
}
async function getCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render("categories", { categories: categories });
}
async function getCategory(req, res) {
  const categoryArr = await db.getCategory(req.params.categoryId);
  const category = categoryArr[0];
  const gamesArr = await db.getGamesByCategory(category.id);

  res.render("category", { category: category, gamesArr: gamesArr });
}

async function getNewGame(req, res) {
  const categoriesArr = await db.getAllCategories();

  res.render("newGame", { categories: categoriesArr });
}
async function postNewGame(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const categories = await db.getAllCategories();
    return res
      .status(400)
      .render("newGame", { errors: errors.array(), categories: categories });
  }
  const { title, price, categories } = matchedData(req);
  await db.createGame(title, price, categories);
  res.redirect("/games");
}

async function getNewCategory(req, res) {
  res.render("newCategory");
}
async function postNewCategory(req, res) {
  await db.createCategory(req.body.title);
  res.redirect("/categories");
}

async function getUpdateGame(req, res) {
  const gameArr = await db.getGame(req.params.gameId);
  const game = gameArr[0];
  const categoryArr = await db.getAllCategories();
  res.render("updateGame", { game: game, categories: categoryArr });
}
async function postUpdateGame(req, res) {
  await db.updateGame(
    req.params.gameId,
    req.body.title,
    req.body.price,
    req.body.categories
  );
  res.redirect("/games");
}

async function getDeleteGame(req, res) {
  await db.deleteGame(req.params.gameId);
  res.redirect("/games");
}
async function getDeleteCategory(req, res) {
  await db.deleteCategory(req.params.categoryId);
  res.redirect("/categories");
}

module.exports = {
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
};
