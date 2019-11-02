module.exports = {
    databaseHost: process.env.DATABASE_HOST || "localhost",
    databaseName: process.env.DATABASE_NAME || "example",
    databaseUser: process.env.DATABASE_USER || "admin",
    databasePassword: process.env.DATABASE_PASSWORD || "secret_password",
    redisHost: process.env.REDIS_HOST || "localhost",
    jwtSecret: process.env.JWT_SECRET || "secret"
};