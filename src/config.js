module.exports = {
  databaseHost: process.env.database_host || "localhost",
  databaseName: process.env.database_name || "example",
  databaseUser: process.env.database_user || "admin",
  databasePassword: process.env.database_password || "secret_password",
  redisHost: process.env.redis_host || "localhost"
};
