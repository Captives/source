var list = [];
onconnect = function (e) {
    var port = e.ports[0];
    list.push(port);
    port.onmessage = function ({ data }) {
        list.forEach(_port => {
            _port.postMessage(data);
        });
        port.postMessage(data + "已经发送");
    }

    port.onchange = function(){
        console.log('onchange');
    }

    port.onerror = function(err){
        console.log('onerror');
    }

    port.start();
    port.postMessage("已经连接....");
}