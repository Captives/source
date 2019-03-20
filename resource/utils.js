var UAParser = require('ua-parser-js');
var log4js = require('../config/Logger');
var console = log4js.getLogger();
function Device(userAgent) {
    this.ua = null;
    if (userAgent) {
        try {
            var json = JSON.parse(userAgent);
            this.ua = new UAParser(json.ua);
            this.device = json.device;
            this.browser = json.browser;
            this.os = json.os;
        } catch (e) {
            var _ua = new UAParser(userAgent);
            this.ua = _ua;
            this.device = _ua.getDevice();
            this.browser = _ua.getBrowser();
            this.os = _ua.getOS();
        }
        // console.log("UserAgent", this.device, this.browser, this.os, userAgent);
    } else {
        console.error('UserAgent', userAgent);
    }
}

Device.prototype.info = function () {
    if(!this.ua){
        return ["unknown device"];
    }

    var dev = this.device;
    var bw = this.browser;
    var os = this.os;
    var text = "";
    if (dev && dev.type) {
        if (dev.vendor) {
            text = dev.vendor + " " + dev.model;
        } else {//山寨产品
            text = os.name + " " + dev.type;
        }
    } else {//桌面设备
        if (os.version) {
            text = os.name + " " + subVersion(os.version);
        } else {
            text = os.name;
        }
    }

    function subVersion(version) {
        var text = "";
        if (version) {
            var index = version.indexOf(".");
            if (index == -1) {
                text = version;
            } else {
                text = version.substring(0, index);
            }
        }
        return text;
    }

    if (bw.name == 'WebKit') {
        return [text];
    }

    return [text, bw.name + " " + subVersion(bw.version)];
};

/**
 * 获取设备信息
 * @param info
 * @param type
 * @returns {*}
 */
var devInfo = function (userAgent) {
    var device = new Device(userAgent);
    return device.info();
};

var formatTimeValue = function (value){
    var tag = value >= 0 ? '' : '-';
    value = Math.round(Math.abs(value));
    var hours = Math.floor(value/3600) % 24;
    var minutes = Math.floor(value/60) % 60;
    var seconds = value % 60;
    var result = "";

    if(value >= 24 * 3600){
        result = Math.floor(value / (24 * 3600)) + "day ";
    }

    if (hours != 0){
        result += hours + ":";
    }else{
        result += "0:";
    }

    if (result && minutes < 10){
        result += "0" + minutes + "";
    }else{
        result += minutes + "";
    }

    if (seconds < 10){
        result += ":0" + seconds;
    }else{
        result += ":" + seconds;
    }

    return tag + result;
};

module.exports = {
    devInfo:devInfo,
    Device:Device,
    formatTime:formatTimeValue
};
