const pgtools = require("pgtools");
const { Pool } = require('pg');
const { config } = require('./dbConfig');

const createDB = async () => {
    if (process.env.DB_ENVIRONMENT === "development") {
        const PG_NAME = "imagerepo";
    
        await pgtools.createdb(config, PG_NAME).catch((err) => {
            console.log(`Database with name ${PG_NAME} already exists.`);
        });
    }
}
createDB();

const pool = new Pool(config);

const user_table = `
   CREATE TABLE IF NOT EXISTS "user_table" (
      "id" SERIAL,
      "username" text NOT NULL,
      "password" text NOT NULL,
      PRIMARY KEY ("id")
   );`;

const image_table = `
   CREATE TABLE IF NOT EXISTS "image_table" (
      "id" SERIAL,
      "title" text NOT NULL,
      "size" text NOT NULL,
      "type" text NOT NULL,
      "path" text NOT NULL,
      "user_id" INTEGER NOT NULL,
      PRIMARY KEY ("id")
   );`;

const execute = async (query) => {
    try {
        await pool.query(query);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

execute(user_table).then(result => {
    if (result) {
        console.log('User table created');
    }
});

execute(image_table).then(result => {
    if (result) {
        console.log('Image table created');
    }
});

pool.end();