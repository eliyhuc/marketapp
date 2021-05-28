const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const csrf = require('csurf');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const app = express();

//USE BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//SET UP VIEWS
app.set('view engine', 'ejs');
app.set('views', 'views');

//MULTER - PATH - UPLOAD FILES
//1
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'public/images');
    },
    filename: (request, file, callback) => {
        callback(null, file.originalname);
    }
})
//2
app.use(multer({ storage: fileStorage, limits: {fileSize: 25033697 } }).array('image'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static('images'));

const indexController = require('./controllers/index');
app.use('/', indexController);

const port = 6060;
app.listen(port, function(){
    console.log(`Server is running via ${port}`);
});

