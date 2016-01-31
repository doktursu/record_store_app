var Store = require('./record_store');

var RecordCollector = function(name, city, balance){
  Store.apply(this, arguments);
};

RecordCollector.prototype = Object.create(Store.prototype);

RecordCollector.prototype.buyItem = function(item, quantity){
  this.addItem(item, quantity);
  this.balance -= item.price * quantity;
};


module.exports = RecordCollector;
