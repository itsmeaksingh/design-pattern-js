const Shopper = require("./Shopper");
const { InventoryItem, GamingInventoryItem, UpgradeInventoryItem } = require("./InventoryItem");

const wdj = new Shopper('Web Dev Journey', 500);

const desktop = new InventoryItem('Desktop', 449.99);
const mouse = new InventoryItem('mouse', 9.99);
const keyboard = new InventoryItem('keyboard', 9.99);


const gamingDesktop = new GamingInventoryItem(desktop);
const upgradedMouse = new UpgradeInventoryItem(mouse);
const upgradedKeys = new UpgradeInventoryItem(keyboard);


wdj.purchase(upgradedMouse);
wdj.purchase(gamingDesktop);
wdj.purchase(upgradedKeys);


wdj.printStatus();

gamingDesktop.print();
