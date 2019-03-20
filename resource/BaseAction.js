/**
 * Created by Administrator on 2017/7/3.
 */
let http = require("http");
let https = require('https');
let querystring = require('querystring');
function Request(server){
    server = server;
    this.host = server.host;
    this.path = null;
    this.port = server.port;
}

//请求处理数据
Request.prototype.responseHandler  = function (response, resolve, reject) {
    // response.setEncoding('utf8');
    if (response.statusCode === 200) {
        let body = "";
        response.on('data', data => {
            body += data
        });
        response.on('end', () => {
            try {
                if (body != null && body != 'null') {
                    body = JSON.parse(body);
                    resolve(body);
                }
            } catch (e) {
                reject({code: 207, data: body, info: e.message});
            }
        });
        response.on('error', e => {
            reject({code: 208, info: e.message});
        });
    } else {
        reject({code: response.statusCode, info: "Invalid method"});
    }
};

//GET请求数据
Request.prototype.getRequest = function (server, path, data) {
    var that = this;
    return new Promise((resolve, reject) => {
        let options = {
            host: that.host,
            port: that.port,
            method: "GET",
            path: path + "?" + querystring.stringify(data),
            headers: {
                "Content-Type": 'application/json',
            }
        };
        server.get(options, response => {
            that.responseHandler(response, resolve, reject);
        });
    });
};

//POST请求数据
Request.prototype.postRequest = function (server, path, data){
    var that = this;
    return new Promise((resolve, reject) => {
        data = JSON.stringify(data);
        let options = {
            method: "POST",
            host: that.host,
            port: that.port,
            path: path,
            headers: {
                "Content-Type": 'application/json; charset=utf-8',
                "Content-Length": data.length
            }
        };

        let req = server.request(options, response => {
            that.responseHandler(response, resolve, reject);
        });
        req.write(data);
        req.end();
    });
};

//后台请求数据
Request.prototype.httpGetRequest = function (path, data) {
    return this.getRequest(http, path, data);
};

//后台请求数据
Request.prototype.httpsGetRequest = function (path, data) {
    return this.getRequest(https, path, data);
};

//后台请求数据
Request.prototype.httpPostRequest = function (path, data) {
    return this.postRequest(http, path, data);
};

//后台请求数据
Request.prototype.httpsPostRequest = function (path, data) {
    return this.postRequest(https, path, data);
};

Request.prototype.http = function (path, data, method) {
    method = method || "GET";
    this.path = path;
    switch (method){
        case "GET":
            return this.httpGetRequest(path, data);
            break;
        case "POST":
            return this.httpPostRequest(path, data);
            break;
    }
};

Request.prototype.https = function (path, data, method) {
    method = method || "GET";
    this.path = path;
    switch (method){
        case "GET":
            return this.httpsGetRequest(path, data);
            break;
        case "POST":
            return this.httpsPostRequest(path, data);
            break;
    }
};

module.exports = {
    Request:Request,
};
