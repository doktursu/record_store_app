var RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = {};
};

// Record.prototype = {
//   addRecord: function(record, quantity){
//   }
// }

module.exports = RecordStore;