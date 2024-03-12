require('dotenv').config();
const express = require('express');
const path = require('path');
const router = require('./routes/index');
const errorHandler = require('./error/errorHandler');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/', router);

app.use(errorHandler);

const start = async () => {
    try {
        app.listen(PORT, () =>
            console.log(`Server started on the PORT: ${PORT}...`)
        );
    } catch (e) {
        console.log(e);
    }
};

start();
