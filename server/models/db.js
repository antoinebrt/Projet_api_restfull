const { Sequelize } = require("sequelize");

const DbUrl = "mysql://antoi:mdpintrouvable@localhost:3306/reservation_db";

const connection = new Sequelize(
    process.env.DATABASE_URL ?? DbUrl
);

connection.authenticate()
    .then(() => console.log("Database is ready"))
    .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = connection;
