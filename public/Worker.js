
var interId = 0;
onmessage = function ({ data }) {
    var now = Date.now();
    switch (data.event) {
        case "start":
            interId = setInterval(function () {
                if (data.value) {
                    postMessage({ event: 'change', time: new Date().toLocaleTimeString(), value: data.value });
                } else {
                    postMessage({ event: 'stop', time: new Date().toLocaleTimeString(), delay: Math.round((Date.now() - now) / 1000) });
                    clearInterval(interId);
                }
                data.value--;
            }, Math.random() * 1000);
            break;
    }
}

