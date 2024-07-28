class InventoryItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    print() {
        console.log(`${item.name} costs ${item.price}`);
    }
}

class GamingInventoryItem {
    constructor(baseItem) {
        this.name = `Gaming ${baseItem.name}`;
        this.price = 1000 + baseItem.price;
    }

    print() {
        console.log(`${this.name} cast a lot of money...`)
    }
}

class UpgradeInventoryItem {
    constructor(baseItem) {
        this.name = `Gaming ${baseItem.name}`;
        this.price = 40 + baseItem.price;
    }
}

module.exports = { InventoryItem, GamingInventoryItem, UpgradeInventoryItem };