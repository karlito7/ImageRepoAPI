const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const storage = require('./storageMiddleware');

require('./database/prepareDB');

const middleware = require('./middleware');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(
   bodyParser.urlencoded({
     extended: true
   })
 );
app.use(cors());

app.get('/', (_req, res) => {
   res.send('Server is running.')
});

app.post('/login', middleware.login);

app.post('/user', middleware.createUser);
app.get('/user/:id/images', middleware.readImageByUserId);
app.post('/user/:id/image', storage.single('file'), middleware.uploadImage)
app.post('/user/:id/images', middleware.uploadImages);

app.get('/image/:id', middleware.readImageById);
app.delete('/image/:id', middleware.deleteImageById);

app.listen(PORT, () => {
   console.log(`App is running on port ${PORT}`);
});