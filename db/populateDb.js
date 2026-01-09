const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS games(
id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
title VARCHAR(20),
price INT, 
category_id INT);

INSERT INTO games (title, price, category_id) 
VALUES
  ('pubg', 20, 2),
  ('battlefield 6', 69, 1),
  ('we were here', 15, 5);

  CREATE TABLE IF NOT EXISTS categories(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(20));

  INSERT INTO categories(title)
  VALUES
  ('battle royale'),
  ('pvp'),
  ('adventure'),
  ('story'),
  ('puzzle');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

module.exports = main;