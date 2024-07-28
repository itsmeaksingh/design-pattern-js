const CatalogItem = require('./CatalogItem');

const dressShoes = new CatalogItem("Wingtip Shoes", 179.99);
const sneakers = new CatalogItem("Kicks", 39.99);
const flipFlops = new CatalogItem("Flip Flops", 9.99);

console.log('Dress shoes total: ', dressShoes.total);

dressShoes.print();
sneakers.print();
