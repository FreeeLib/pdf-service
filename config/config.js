require('dotenv').config();

module.exports = {
  development: {
    database: process.env.DB,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    migrationStorageTableSchema: 'app',
  },
  test: {
    database: process.env.DB,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    migrationStorageTableSchema: 'app',
  },
  production: {
    database: process.env.DB,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    migrationStorageTableSchema: 'app',
  },
};
