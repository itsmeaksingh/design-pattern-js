const Storage = require("./Storage");

class Store {
    constructor(name, inventory = []) {
        this.name = name;
        const floor = new Storage('store floor', inventory.floor);
        const backroom = new Storage('store backroom', inventory.backroom);
        const localstore = new Storage('store localstore', inventory.localstore, 1);
        const warehouse = new Storage('store warehouse', inventory.warehouse, 5);

        this.storage = floor;  // for start from start

        floor.setNext(backroom);
        backroom.setNext(localstore);
        localstore.setNext(warehouse);

    }

    find(itemName) {
        return this.storage.find(itemName);
    }
}

module.exports = Store;