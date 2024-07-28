const LogStategy = require("./LogStategy");
const config = require("./config.json");

class Logger {
    constructor(strategy = 'toConsole') {
        this.logs = [];
        this.strategy = LogStategy[strategy];
    }

    get count() {
        return this.logs.length;
    }

    changeStrategy(newStrategy) {
        this.strategy = LogStategy[newStrategy];
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        this.strategy(timestamp, message)
    }
}

module.exports = new Logger(config.logs.strategy);