// var saveData = "";
// onconnect = function (e) {
//     var port = e.ports[0];
//     port.onmessage = function (e, { data }) {
//         console.log('get ----', e, data);
//         if (e.data === 'get') {
//             port.postMessage(saveData);
//             // setInterval(function () {
//             //     port.postMessage(saveData);
//             // }, 1000);
//         } else {
//             saveData = e.data; //count ++;
//         }
//     }
// }

/*
// // sharedWorker所要用到的js文件，不必打包到项目中，直接放到服务器即可
let data = '';
onconnect = function (e) {
  let port = e.ports[0]
  port.onmessage = function (e) {
    // if (e.data === 'get') {
    //   port.postMessage(data);
    // } else {
      data = e.data;
      port.postMessage(data);
    // }
  }
}

*/
var list = [];
onconnect = function (e) {
    list = e.ports;
    list.forEach(port => {
        port.onmessage = function ({ data }) {
            list.forEach(_port => {
                _port.postMessage(data);
            });
        }
    });
}