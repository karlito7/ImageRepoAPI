const { queryOne, queryAll } = require('./query');
const format = require('pg-format');

const upload = async (list) => {
    const sql = format('INSERT INTO image_table (id, name, email, phone) VALUES %L', list);

    return queryAll(sql);
};


const readByUserId = (id) => {
    const sql = 'SELECT * FROM image_table WHERE user_id=$1';
    const data = [id];

    return queryAll(sql, data);
};

const remove = (id) => {
    const sql = 'DELETE FROM image_table WHERE id=$1';
    const data = [id];

    return queryOne(sql, data);
};

module.exports = {
    upload,
    readByUserId,
    remove
}



