module.exports = {
  development: {
    username: "postgres",
    password: "example",
    database: "api_bq_development",
    host: "db",
    dialect: "postgres",
    operatorsAliases: false,
  },
  test: {
    username: "postgres",
    password: "example",
    database: "api_bq_test",
    host: "db",
    dialect: "postgres",
    operatorsAliases: false,
  },
  production: {
    username: "postgres",
    password: "example",
    database: "api_bq",
    host: "db",
    dialect: "postgres",
    operatorsAliases: false,
  },
};
