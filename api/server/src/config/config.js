module.exports = {
  development: {
    username: "postgres",
    password: null,
    database: "new_burger_development",
    host: "db",
    dialect: "postgres",
    operatorsAliases: false,
  },
  test: {
    username: "postgres",
    password: null,
    database: "new_burger_test",
    host: "db",
    dialect: "postgres",
    operatorsAliases: false,
  },
  production: {
    username: "postgres",
    password: null,
    database: "new_burger_production",
    host: "db",
    dialect: "postgres",
    operatorsAliases: false,
  },
};
