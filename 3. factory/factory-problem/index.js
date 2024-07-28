const Shopper = require('./Shopper');
const Employee = require('./Employee');

const wdj = new Shopper('Web dev Journey', 100);
const mike = new Employee('Mike LongJohn Silver', 100, 'Origional Inc.');


console.log(wdj.toString());
console.log(mike.toString());

// var Shopper = require('./Shopper');
// var Employee = require('./Employee');
// var Distributor = require('./Distributor');
// var Driver = require('./Driver');
// var Manager = require('./Manager');
// var Developer = require('./Developer');

// var wdj = new Shopper('Web Dev Journey', 100);
// var mike = new Employee('Mike Longjohn Silver', 100, 'Original Inc.');
// var sam = new Employee('Sam');
// var doug = new Employee('Doug', 'Truck');
