const Store = require("./Store");
const inventory = require("./inventory.json");

const wdjShop = new Store('Web Dev Journey Store', inventory.floor);

const searchItem = 'monitor'; // monitor
const results = wdjShop.find(searchItem);

console.log(results);
