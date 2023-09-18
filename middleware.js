const userQuery = require('./userQuery');
const imageQuery = require('./imageQuery');


/**         USER OPERATIONS         */
const createUser = async (request, response) => {
    const {username, password, image} = request.body;

    try {
        const user = await userQuery.create(username, password, image);
        response.status(200);
    } catch (err) {
        response.status(400).json(err);
    }
};

const login = async (request, response) => {
    const {username, password} = request.body;

    try {
        const user = await userQuery.login(username, password);

        response.status(200).json(user);
    } catch (err) {
        response.status(400).json(err);
    }
};


/**         IMAGE OPERATIONS         */
const uploadImage = async (request, response) => {
    const {list} = request.body;

    try {
        const resList = await imageQuery.upload(list);

        response.status(200).json(resList);
    } catch (err) {
        response.status(400).json(err);
    }
};

const readImageByUserId = async (request, response) => {
    const id = parseInt(request.params.id);
    
    try {
        const res = await imageQuery.readByUserId(id);

        response.status(200).json(res);
    } catch (err) {
        response.status(400).json(err);
    }
};


const deleteImageById = async (request, response) => {
    const id = parseInt(request.params.id);
    
    try {
        const res = await imageQuery.remove(id);

        response.status(200).json(res);
    } catch (err) {
        response.status(400).json(err);
    }
};

module.exports = {
    createUser,
    login,
    uploadImage,
    readImageByUserId,
    deleteImageById
}