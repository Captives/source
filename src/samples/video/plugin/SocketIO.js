import io from 'socket.io-client';
import BaseEvent from '@/plugin/BaseEvent'

/*******************************************************************
 * Socket.io消息通讯 
 * socket.io-client
 * @constructor
 *******************************************************************/
class RemoteClient extends BaseEvent {
    connected = false;
    count = 5;

    constructor(options) {
        if (!window.WebSocket) {
            console.warn("This browser does not support WebSocket.");
        }

        var manager = {
            secure: true,
            transports: ['websocket'],         // ['websocket', 'polling']
            reconnection: true,                //启动自动连接
            reconnectionAttempts: this.count,  //最大重试连接次数
            reconnectionDelay: 2000,           //最初尝试新的重新连接等待时间
            reconnectionDelayMax: 10000,       //最大等待重新连接,之前的2倍增长
            timeout: 20000                     //
        };

        manager = Object.assign(manager, options);
        console.log('webclient connect', options.url, manager);
        this.connected = false;
        this.socket = io.connect(options.url, manager);

        var that = this;
        //连接时触发
        this.socket.on("connect", function () {
            console.log("socket io", options.url, options.path, "socket io connected success");
            that.socket.emit('authenticate', 'token');
        });

        //身份验证成功 authenticated
        this.socket.on('authenticated', function () {
            console.log('authenticated');
            that.connected = true;
            that.emit('connected', that.socket);
        });

        //连接时发生错误
        this.socket.on("connect_error", function (err) {
            console.error("socket io", "connect error");
            that.connected = false;
        });

        //连接时超时
        this.socket.on("connect_timeout", function () {
            console.log("socket io", "connect_timeout");
            that.connected = false;
        });

        //断开连接时触发
        this.socket.on('disconnect', function () {
            console.log("socket io", 'disconnect');
            that.connected = false;
            that.emit('disconnect', that.connected);
        });

        //成功重连后触发,num连接尝试次数
        this.socket.on('reconnect', function (num) {
            console.log("socket io", 'reconnect', num);
        });

        //试图重新连接时触发
        this.socket.on('reconnect_attempt', function () {
            console.log("socket io", 'reconnect attempt');
        });

        //试图重新连接中触发, num连接尝试次数
        this.socket.on('reconnecting', function (num) {
            console.log("socket io", 'reconnecting', num);
            that.emit('reconnect', num, manager.reconnectionAttempts);
        });

        //重联尝试错误,err
        this.socket.on('reconnect_error', function (err) {
            console.error("socket io", 'reconnect error');
            that.connected = false;
        });

        //重连失败
        this.socket.on('reconnect_failed', function () {
            console.log("socket io", 'reconnect failed');
            that.connected = false;
            that.emit('close');
        });

        this.socket.on('error', function (err) {
            console.error("socket io", 'error');
            that.connected = false;
            that.emit('error');
        });

        return this.socket;
    }
}

let _socketClient = null;
Plugin.install = function (Vue, options) {
    _socketClient = new RemoteClient(options);
    Vue.socket = _socketClient;
    window.socket = _socketClient;
    Object.defineProperties(Vue.prototype, {
        socket: {
            get() {
                return _socketClient;
            }
        },
        $socket: {
            get() {
                return _socketClient;
            }
        },
    });
};

export default Plugin;
