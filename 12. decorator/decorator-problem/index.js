const Shopper = require("./Shopper");
const InventoryItem = require("./InventoryItem");

const wdj = new Shopper('Web Dev Journey', 500);
const desktop = new InventoryItem('Desktop', 449.99);
const mouse = new InventoryItem('mouse', 9.99);

wdj.purchase(mouse);
wdj.purchase(desktop);

wdj.printStatus();


