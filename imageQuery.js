const { queryOne, queryAll } = require('./query');
const format = require('pg-format');

const upload = async (originalname, mimetype, path, size, id) => {
    const sql = 'INSERT INTO image_table (title, size, type, path, user_id) VALUES ($1, $2, $3, $4, $5)';
    const data = [originalname, size.toString(), mimetype, path, id];

    return queryOne(sql, data);
};

const uploadList = async (list) => {
    const sql = format('INSERT INTO image_table (name, email, phone) VALUES %L', list);

    return queryAll(sql);
};

const read = (id) => {
    const sql = 'SELECT path, size FROM image_table WHERE id=$1';
    const data = [id];

    return queryOne(sql, data);
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
    uploadList,
    read,
    readByUserId,
    remove
}



