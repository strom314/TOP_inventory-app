const db = require("../db/query");

function getIndex(req, res) {
  res.render("index");
}

async function getGames(req, res) {
  const games = await db.getAllGames();
  console.log(games);

  res.render("games", { games: games });
}
function getGame(req, res) {}
function getCategories(req, res) {}
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
