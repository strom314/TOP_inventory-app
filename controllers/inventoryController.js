const db = require("../db/query");

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
  const category = categoryArr[0];

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

async function getNewGame() {}
async function postNewGame() {}

async function getNewCategory() {}
async function postNewCategory() {}

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
};
