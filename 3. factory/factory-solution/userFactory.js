const Shopper = require('./Shopper');
const Employee = require('./Employee');

const userFactory = (type, name, money, employer) => {
    if (type === 'employee') {
        return new Employee(name, money, employer);
    } else {
        return new Shopper(name, money);
    }
}

module.exports = userFactory;