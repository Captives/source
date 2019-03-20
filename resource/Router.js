var RouteHandler = require('./RouterHandler');
var POSTHandler = require('./POSTHandler');
var querystring = require('querystring');
var url = require('url');

const log4js = require('../config/Logger');
const console= log4js.getLogger('index');
const handler = new POSTHandler();
function Router() {

};

Router.parsePostBody = function (req, done) {
  var arr = [];
  var chunks;

  req.on('data', buff => {
    arr.push(buff);
  });

  req.on('end', () => {
    chunks = Buffer.concat(arr);
    if (req.headers['content-type'].indexOf('text/plain') != -1) {
      done(chunks.toString());
    } else if (req.headers['content-type'].indexOf('application/json') != -1) {
      done(JSON.parse(chunks));
    } else if (req.headers['content-type'].indexOf('application/x-www-form-urlencoded') != -1) {
      // done(JSON.parse(JSON.stringify(querystring.parse(chunks.toString()))));
      done(querystring.parse(chunks.toString()));
    } else {
      done(chunks);
    }
  });
};

Router.prototype.handler = function (req, res) {
  var item = url.parse(req.url);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "x-requested-with,content-type");

  if (req.method == "POST") {
    Router.parsePostBody(req, function (data) {
      console.log('POST', data);
      switch (item.pathname) {
        case '/favicon.ico':
          break;
        case '/login':
          handler.login(data, res);
          break;
        case '/chklogin':
          handler.checkLogin(data, res);
          break;
        case '/logout':
          break;
      }
    });
  } else if (req.method == "GET") {
    switch (item.pathname) {
      case '/favicon.ico':
        break;
      case '/':
        RouteHandler.startup(req, res);
        break;
      case '/search':
        RouteHandler.search(item.query, res);
        break;
      default:
        RouteHandler.notFound(req, res);
        break;
    }
  } else {
    res.end();
  }
};

module.exports = new Router();
