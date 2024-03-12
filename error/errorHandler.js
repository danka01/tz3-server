const fs = require('fs');
const path = require('path');

const errorHandler = (req, res, next) => {
    const filePath = path.join(__dirname, 'static', req.path);
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.status(404).send(`File not found: ${req.path}`);
        } else {
            next();
        }
    });
};

module.exports = errorHandler;
