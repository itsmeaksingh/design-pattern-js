const { existsSync, readFileSync, unlink, writeFileSync } = require('fs');


class LocalStorage {
    constructor() {
        if (existsSync('localStorage.json')) {
            console.log("Loading items form localStorage.json");
            const text = readFileSync('./localStorage.json');
            this.items = JSON.parse(text);
        } else {
            this.items = {};
        }
    }

    get length() {
        return Object.keys(this.items).length;
    }

    getItem(key) {
        return this.items[key]
    }

    setItem(key, value) {
        this.items[key] = value;
        writeFileSync('localStorage.json', JSON.stringify(this.items));
    }

    clear() {
        this.items = {};
        unlink('localStorage.json', () => {
            console.log('localStorage file removed');
        })
    }
}

module.exports = new LocalStorage();