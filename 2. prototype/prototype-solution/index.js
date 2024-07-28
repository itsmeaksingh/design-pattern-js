const scout_prototype = require("./scout_prototype");

const wdj = scout_prototype.clone();
wdj.name = "web Dev Journey";
wdj.addItemToList('slingshot');


const mike = scout_prototype.clone();
mike.name = 'Mike LongJohn';
mike.addItemToList('reading light');


console.log(`${wdj.name}: ${wdj.shoppingList}`);
console.log(`${mike.name}: ${mike.shoppingList}`);
