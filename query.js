const { Client } = require('pg');
const { config } = require('./database/dbConfig');

const queryOne = async (sql, values = undefined) => {
    const client = new Client(config);
    client.connect();
    
    return client.query(sql, values).then(res => {
        return res.rows[0];
    }).catch(err => {
        console.warn("Error in statement > ", sql, "\nError: ", err);
        throw err;
    }).finally(() => {
        client.end();
    });
};

const queryAll = async (sql, values = undefined) => {
    const client = new Client(config);
    client.connect();

    return client.query(sql, values).then(res => {
        return res.rows;
    }).catch(err => {
        console.warn("Error in statement > ", sql, "\nError: ", err);
        throw err;
    }).finally(() => {
        client.end();
    });
};

module.exports = {
    queryOne,
    queryAll
}