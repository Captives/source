const Crawler = require('crawler');
const c = new Crawler({
    maxConnections: 10,
    callback(error, res, done) {
        if (error) {
            console.log(error);
        } else {
            let $ = res.$;
            console.log($('title').text());
        } 
    }
});

c.queue('http://www.baidu.com');
c.queue(['http://www.baidu.com', 'http://www.uuabc.com']);
