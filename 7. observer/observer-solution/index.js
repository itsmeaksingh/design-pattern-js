const Store = require("../observer-solution/Store");
const Shopper = require("../observer-solution/Shopper");
const Mall = require("../observer-solution/Mall");


const original = new Store("Original Things");
const gubber = new Store("Gubber Fubber");


const wdj = new Shopper('WDJ');
const mike = new Shopper('Mike');
const pete = new Shopper('Pete');
const sam = new Shopper('Sam');

const originalMall = new Mall();

// All the store(Obserbable) subscribe 
original.subscribe(wdj);
original.subscribe(sam);
original.subscribe(pete);
original.subscribe(originalMall);

gubber.subscribe(mike);
gubber.subscribe(originalMall);

original.sale(99);
gubber.sale(.1);

console.log(originalMall.sales);