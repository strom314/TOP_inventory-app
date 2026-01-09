const pool = require("./pool");

//GET QUERIES

async function getAllGames() {
  const games = await pool.query("SELECT * FROM games");
  return games.rows;
}

async function getGame(id) {
  const game = await pool.query(`SELECT * FROM games WHERE id=${id}`);
  return game.rows;
}

async function getAllCategories() {
  const categories = await pool.query("SELECT * FROM categories");
  return categories.rows;
}

async function getCategory(id) {
  const category = await pool.query(`SELECT * FROM categories WHERE id=${id}`);
  return category.rows;
}

async function getGamesByCategory(categoryId) {
  const games = await pool.query(
    `SELECT * FROM games WHERE category_id=${categoryId}`
  );
  return games.rows;
}

//CREATE QUERIES

async function createGame(title, price, category_id) {
  await pool.query(
    `INSERT INTO games(title, price, category_id) VALUES ($1, $2, $3)`,
    [title, price, category_id]
  );
}
async function createCategory(name) {
  await pool.query(`INSERT INTO categories(name) VALUES($1)`, [name]);
}

//UPDATE QUERIES

async function updateGame(id, title, price, category_id) {
  await pool.query(
    `UPDATE games SET title=$1, price=$2, category_id=$3 WHERE id=${id}`,
    [title, price, category_id]
  );
}

//DELETE QUERIES

async function deleteGame(id) {
  await pool.query(`DELETE FROM games WHERE id=${id}`);
}
async function deleteCategory(id) {
  await pool.query(`DELETE FROM categories WHERE id=${id}`);
}

module.exports = {
  getAllGames,
  getAllCategories,
  getGame,
  getCategory,
  getGamesByCategory,
  createGame,
  createCategory,
};
