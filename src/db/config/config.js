module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "mystore",
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5432,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
