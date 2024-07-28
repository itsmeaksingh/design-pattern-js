const Person = require('./Person');

// Employees
const sue = new Person('sue', true, true, 60);
const patrick = new Person('Patrick', true, false, 20);
const john = new Person('John', true, false);

// shoppers
const mike = new Person('mike', false, false, 0, 500, ['jeans', 'sunglasses']);
const wdj = new Person('WDJ', false, false, 0, 1000);

console.log(sue.toString());
console.log(mike.toString());