var list = [];
onconnect = function (e) {
    var port = e.ports[0];
    list.push(port);
    port.onmessage = function ({ data }) {
        port.postMessage(data + "已经发送");
        list.forEach(_port => {
            _port.postMessage(data);
        });
    }
    port.start();
    port.postMessage("已经连接....");
}