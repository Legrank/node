const request = require('request');
const cheerio = require('cheerio');
const http = require('http');

const result = []

request('https://geekbrains.ru/', (err, response, body) => {
    if(!err && response.statusCode === 200){
        const $ = cheerio.load(body);

        const resultText = $('.desc')
        const resultName = $('.icon-circle-container')

        resultText.map((i, item) => {
            const name = resultName.eq(i).next().text()
            result.push(`<h2>${name}</h2> <div>${item.children[0].data}</div>`)
        })
    }
});

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
    });
    result.forEach(item => res.write(item));
    res.end();
}).listen(4000);