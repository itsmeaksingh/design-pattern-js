const Store = require("./Store");
const inventory = require("./inventory.json");

const wdjShop = new Store('Web Dev Journey Store', inventory);

const searchItem = 'microphone'; // monitor
const results = wdjShop.find(searchItem);

console.log(results);
