const pool = require("./pool");

//GET QUERIES

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

//CREATE QUERIES

async function createGame(title, price, developer_id, category_id) {
  await pool.query(
    `INSERT INTO inventory_games(title, price, developer_id, category_id) VALUES ($1, $2, $3, $4)`,
    [title, price, developer_id, category_id]
  );
}
async function createCategory(name) {
  await pool.query(`INSERT INTO inventory_categories(name) VALUES($1)`, [name]);
}

module.exports = {
  getAllGames,
  getAllCategories,
  getGame,
  getCategory,
};
