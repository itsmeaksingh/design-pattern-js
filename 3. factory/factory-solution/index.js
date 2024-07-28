const userFactory = require('./userFactory');

const wdj = userFactory('Web dev Journey', 100);
const mike = userFactory('employee', 'Mike LongJohn Silver', 100, 'Origional Inc.');

mike.payDay(1);

console.log(wdj.toString());
console.log(mike.toString());

