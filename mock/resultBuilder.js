const
    Mock = require('./mock.json'),
    Message = require('./code.json');

class Result {
    constructor(Mock, Message) {
        this.Mock = Mock;
        this.Message = Message;
    }

    buildResult(isSuccess, code, dataName) {
        return JSON.stringify({
            isSuccess,
            code,
            message: this.Message[code],
            result: this.Mock[dataName] || {}
        });
    }

    buildSuccessResult(dataName) {
        return JSON.stringify({
            isSuccess: true,
            result: this.Mock[dataName] || {}
        });
    }

    buildErrorResult(code) {
        return JSON.stringify({
            isSuccess: false,
            code,
            message: this.Message[code]
        });
    }
}
module.exports = new Result(Mock,Message);