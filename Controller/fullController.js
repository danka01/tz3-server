const path = require('path');

class FullController {
    getAll(req, res) {
        return res.sendFile(
            path.resolve(__dirname, '..', 'page', 'general.html')
        );
    }
}

module.exports = new FullController();
