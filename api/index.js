const experss = require('express');
const sequelize = require('sequelize');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./src/routes');
require('dotenv').config();

const {
    DB_HOST, DB_NAME, DB_USER, DB_PASSWORD
} = process.env;



// db
const db = new sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST, dialect: 'postgres'
});

// server
const app = experss();
const port = '3001';

// middlewares
app.use(experss.json());
app.use(experss.urlencoded());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors('*'));

// routes
app.use(routes);


// sync and live
db.sync({force: true}).then(() => {
    app.listen(() => {
        console.log('PORT: ' + port);
    });
});


module.exports = {
    app, db
}