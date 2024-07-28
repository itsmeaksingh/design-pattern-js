const CatalogItem = require('./CatalogItem');
const CatalogGroup = require('./CatelogGroup');

const dressShoes = new CatalogItem("Wingtip Shoes", 179.99);
const sneakers = new CatalogItem("Kicks", 39.99);
const flipFlops = new CatalogItem("Flip Flops", 9.99);

const group_shoes = new CatalogGroup("Shoes Group", [dressShoes, sneakers, flipFlops]);

const group_food = new CatalogGroup("Fancy Food", [
    new CatalogItem("milkshakes", 5.99),
    new CatalogItem("French Fries", 3.99)
])

const keyChain = new CatalogItem('Key Chain', 6.99);

const storeCatalog = new CatalogGroup("store Catalog", [keyChain, group_shoes, group_food]);

console.log(`$${storeCatalog.total}`);

storeCatalog.print();
