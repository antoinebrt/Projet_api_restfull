const { Sequelize } = require("sequelize");

const DbUrl = "mysql://user_a_definir:mdp_a_definir@localhost:3306/nomBd";

const connection = new Sequelize(
    process.env.DATABASE_URL ?? DbUrl
);

connection.authenticate().then(() => console.log("Database is ready"));

module.exports = connection;
