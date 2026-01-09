const pool = require("./pool");

async function getAllGames() {
  const games = await pool.query("SELECT * FROM inventory_games");
  return games.rows;
}

async function getGame(id) {
  const game = await pool.query(`SELECT * FROM inventory_games WHERE id=${id}`);
  return game.rows;
}

async function getAllCategories() {
  const categories = await pool.query("SELECT * FROM inventory_categories");
  return categories.rows;
}

async function getCategory(id) {
  const category = await pool.query(
    `SELECT * FROM inventory_categories WHERE id=${id}`
  );
  return category.rows;
}

