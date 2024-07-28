const conductor = require('./conductor');
const { ExitCommand, CreateCommand } = require('./commands')

const { createInterface } = require('readline');
const r1 = createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('create <filename> <text> |history|undo|redo|exit');
r1.prompt();

r1.on('line', input => {
    const [commandText, ...remaining] = input.split(' ');
    const [fileName, ...fileText] = remaining;
    const text = fileText.join(' ');

    switch (commandText) {
        case 'history':
            conductor.printHistory();
            break;
        case 'undo':
            conductor.undo();
            break;
        case 'redo':
            conductor.redo();
            break;
        case "exit":
            conductor.run(new ExitCommand());
            console.log('TODO: Exit');
            break;
        case "create":
            conductor.run(new CreateCommand(fileName, text));
            console.log('TODO: Create File ', fileName);
            console.log('file Contents: ', text);
            break;
        default:
            console.log(`${commandText} command not found!`);
    }

    r1.prompt();
})
