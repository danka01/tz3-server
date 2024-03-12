const fetch = require('node-fetch');
const cheerio = require('cheerio');
const url = 'https://www.anekdot.ru/random/anekdot/';

class JokesController {
    async getAll(req, res) {
        const html = [];
        const response = await fetch(url);
        const text = await response.text();
        //console.log(text);
        const $ = cheerio.load(text);

        // Выбор всех элементов div с классом text и извлечение их содержимого
        $('.text').each((index, element) => {
            const content = $(element).html();
            html.push(content);
        });
        const htmlContent = html.join('<br><br>');
        return res.send(`<div>${htmlContent}</div>`);
    }
}

module.exports = new JokesController();
