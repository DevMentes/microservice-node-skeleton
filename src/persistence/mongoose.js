const mongoose = require("mongoose");
const config = require("./../config");

const databaseHost = config.databaseHost;
const databaseUser = config.databaseUser ? config.databaseUser : "";
const databasePassword = config.databasePassword ? config.databasePassword : "";
const databaseName = config.databaseName;

const connectionString = `${databaseHost}/${databaseName}?authSource=admin`;

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  user: databaseUser,
  pass: databasePassword
};

mongoose
  .connect(connectionString, options)
  .then(() => {
    console.log("connection with database was successfully.");
  })
  .catch(error => {
    throw new Error(error.message);
  });

module.exports = mongoose;
