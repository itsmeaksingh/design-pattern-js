const InventoryItem = require('./InventoryItem');

require('readline').emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log('Press any direction key');

const inventory = [
    new InventoryItem("mouse", 9.99),
    new InventoryItem("mouse pad", 19.99),
    new InventoryItem("keyboard", 129.99),
    new InventoryItem("monitor", 159.99),
    new InventoryItem("mic", 54.99),
    new InventoryItem("desktop", 1299.99),
    new InventoryItem("laptop", 899.99),
    new InventoryItem("momery", 199.99)
]

process.stdin.on('keypress', (str, key) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    switch (key.name) {
        case 'right':
            process.stdout.write('right');
            break;
        case 'left':
            process.stdout.write('left');
            break;
        case 'down':
            process.stdout.write('down');
            break;
        case 'up':
            process.stdout.write('up');
            break;
        case 'c':
            if (key.ctrl)
                process.exit();
            break;
        default:
            process.exit(0);
            break;
    }
})