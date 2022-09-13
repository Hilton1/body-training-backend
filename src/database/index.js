require('dotenv/config');

const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: process.env.DB_PASS,
  database: 'bodytraining',
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = client.query(query, values);
  return rows;
};
