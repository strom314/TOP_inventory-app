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
function getCategory(req, res) {}
function getNewFormPage(req, res) {}
function postNew(req, res) {}

module.exports = {
  getIndex,
  getGames,
  getGame,
  getCategories,
  getCategory,
  getNewFormPage,
  postNew,
};
