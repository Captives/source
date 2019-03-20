/**
 * Created by Administrator on 2018/8/6.
 */
var Request = require('./BaseAction').Request;
module.exports = function (ip) {
        var address = {
            country: '',
            country_id: '',
            area: '',
            region: '',
            city: '',
            county: '',
            isp: '查询失败',
            isp_id: 'error',
            ip: ip
        };
        var request = new Request({host: 'ip.taobao.com', port: 80});
        return new Promise((resolve, reject)=> {
            request.http('/service/getIpInfo.php', {ip: ip}).then(function (result) {
                var code = result.code;
                var data = result.data;
                if (code == 0) {
                    var data = result.data;
                    delete data['area_id'];
                    delete data['region_id'];
                    delete data['city_id'];
                    delete data['county_id'];
                    address = data;
                    resolve(address);
                } else {
                    address.isp = result.data;
                    resolve(address);
                }
            }).catch(function (err) {
                resolve(address);
            });
        });
};