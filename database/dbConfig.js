require('dotenv').config();

const config = process.env.DB_ENVIRONMENT === "staging" ? {
    connectionString: process.env.DATABASE_URL, ssl: {
        rejectUnauthorized: false
    }
} : {};

module.exports = {
    config
};