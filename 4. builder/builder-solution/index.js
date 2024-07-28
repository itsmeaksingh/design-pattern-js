const PersonBuilder = require('./PersonBuilder');

// Employees
const sue = new PersonBuilder('sue').makeEmployee().makeManager(60).build();
const patrick = new PersonBuilder('Patrick').makeEmployee().makePartTime().build();
const john = new PersonBuilder('john').makeEmployee().build();
// const sue = new Person('sue', true, true, 60);
// const patrick = new Person('Patrick', true, false, 20);
// const john = new Person('john', true, false);

// shoppers
const mike = new PersonBuilder('mike')
    .withMoney(500)
    .withList(['jeans', 'sunglasses'])
    .build();
const wdj = new PersonBuilder('WDJ')
    .withMoney('1000')
    .build();

// const mike = new Person('mike', false, false, 0, 500, ['jeans', 'sunglasses']);
// const wdj = new Person('WDJ', false, false, 0, 1000);


console.log(sue.toString());
console.log(mike.toString());
