const { queryOne, queryAll } = require('./query');

const create = (username, password, image) => {
    const data = [username, password, image];
    const sql = 'INSERT INTO user_table (username, password, image) VALUES ($1, $2, $3)';

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



