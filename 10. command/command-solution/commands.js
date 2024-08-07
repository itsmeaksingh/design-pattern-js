const { writeFile, unlink } = require('fs');
const path = require('path');

class ExitCommand {

    get name() {
        return 'exit... bye!';
    }

    execute() {
        process.exit(0);
    }
}

class CreateCommand {
    constructor(fileName, text) {
        this.fileName = fileName;
        this.body = text;
        this.fullPath = path.join(__dirname, fileName);
    }

    get name() {
        return `create ${this.fileName}`;
    }

    execute() {
        writeFile(this.fileName, this.body, cb => cb);
    }

    undo() {
        unlink(this.fullPath, cb => cb)
    }
}

module.exports = { ExitCommand, CreateCommand };