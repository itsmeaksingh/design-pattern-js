const Shopper = require("./Shopper");

const scout = new Shopper();
scout.addItemToList('comping knife');
scout.addItemToList('tent');
scout.addItemToList('backpack');
scout.addItemToList('map');    // -- till here common

module.exports = scout;