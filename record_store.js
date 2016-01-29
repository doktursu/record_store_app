var RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = {};
};

RecordStore.prototype = {
  addRecord: function(record, quantity){
    this.inventory[record.id] = {
      record: record,
      quantity: quantity
    };
  },
};

module.exports = RecordStore;