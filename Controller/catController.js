const getRandomCat = require('random-cat-img');

class CatController {
    async getCat(req, res) {
        const data = await getRandomCat();
        return res.redirect(data.message);
    }
}

module.exports = new CatController();
