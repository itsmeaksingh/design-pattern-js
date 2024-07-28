const Store = require("./Store");
const Shopper = require("./Shopper");
const Mall = require("./Mall");


const original = new Store("Original Things");
const gubber = new Store("Gubber Fubber");


const wdj = new Shopper('WDJ');
const mike = new Shopper('Mike');
const pete = new Shopper('Pete');
const sam = new Shopper('Sam');

const originalMall = new Mall();

console.log(originalMall.sales);

