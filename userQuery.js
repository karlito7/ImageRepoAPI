const { queryOne, queryAll } = require('./query');

const create = (username, password) => {
    const data = [username, password];
    const sql = 'INSERT INTO user_table (username, password) VALUES ($1, $2)';

    return queryOne(sql, data);
};

const login = (username, password) => {
    const data = [username, password];
    const sql = 'SELECT * FROM user_table WHERE username = $1 AND password = $2';

    return queryAll(sql, data);
};

module.exports = {
    create,
    login
}



