const Shopper = require("./Shopper");

const wdj = new Shopper('web dev journry');
wdj.addItemToList('comping knife');
wdj.addItemToList('tent');
wdj.addItemToList('backpack');
wdj.addItemToList('map');    // -- till here common
wdj.addItemToList('slingshot');


const mike = new Shopper('Mike LongJohn');
mike.addItemToList('comping knife');
mike.addItemToList('tent');
mike.addItemToList('backpack');
mike.addItemToList('map');
mike.addItemToList('reading light');


console.log(`${wdj.name}: ${wdj.shoppingList}`);
console.log(`${mike.name}: ${mike.shoppingList}`);
