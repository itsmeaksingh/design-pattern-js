const path = require('path')
const { appendFile } = require('fs');
const morse = require("morse");

class LogStategy {

    static toMorseCode(timestamp, message){
        const morseCode = morse.encode(message);
        console.log(morseCode);
    }
    
    static noDate(timestamp, messgae) {
        console.log(messgae)
    }

    static toFile(timestamp, messgae) {
        const fileName = path.join(__dirname, "logs.txt");
        appendFile(fileName, `${timestamp} - ${messgae} \n`, error => {
            if (error) {
                console.log('Error writing to file');
                console.error(error);
            }
        })

    }
    static toConsole(timestamp, messgae) {
        console.log(`${timestamp} - ${messgae}`);

    }
    static none() {

    }
}

module.exports = LogStategy;