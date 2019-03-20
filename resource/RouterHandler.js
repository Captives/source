var querystring = require('querystring');
var ipSearch = require('../resource/IPSearch');
var formatTime = require('../resource/utils').formatTime;

var log4js = require('../config/Logger');
var console = log4js.getLogger('search');
function RouteHandler() {

}

RouteHandler.prototype.search = function (req, res) {
  var data = req.method == "GET" ? req.query : req.body;
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "x-requested-with,content-type");
  res.writeHead(200, {'Content-type': 'text/html; charset=UTF-8'});
  ipSearch(data.ip).then((data) => {
    res.end(JSON.stringify(data));
  });
};

RouteHandler.prototype.notFound = function (req, res) {
  res.writeHead(200, {'Content-type': 'text/html; charset=UTF-8'});
  res.end('<h1 id="time" style="text-align: center; color: #DF2828">404 页面未找到</h1>');
};

RouteHandler.prototype.startup = function (req, res) {
  res.writeHead(200, {'Content-type': 'text/html; charset=UTF-8'});
  res.end(`<style>html,body{-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;}</style>
        <h1 id="time" style="text-align: center; color: #4DB749"></h1>
        <script>
            var count = ${Math.round(process.uptime())};
            var startup = function() {
                document.getElementById('time').innerHTML = 'run time : <br/> ' +
                 '<span style="font-size: 3cm;">' + ${formatTime}(count++) + '</span>';
            };
            setInterval(startup, 1000);
            startup();
        </script>`);
};


module.exports = new RouteHandler();
