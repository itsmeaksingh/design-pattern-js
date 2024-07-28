const { createInterface } = require('readline');
const r1 = createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('create <filename> <text> | exit');
r1.prompt();

r1.on('line', input => {
    const [commandText, ...remaining] = input.split(' ');
    const [fileName, ...fileText] = remaining;
    const text = fileText.join(' ');

    switch (commandText) {
        case "exit":
            console.log('TODO: Exit');
            break;
        case "create":
            console.log('TODO: Create File ', fileName);
            console.log('file Contents: ', text);
            break;
        default:
            console.log(`${commandText} command not found!`);
    }

    r1.prompt();
})
