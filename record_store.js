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
  listInventory: function(){
    var inventory = [];
    for (entry in inventory) {
      var string = entry.record.stringify() + '\n quantity:\t' + entry.quantity;
      inventory.push(string);
    }
    console.log(inventory.join('\n\n'));
  },
  // stringify: function(recordItem){
  //   var string = '';
  //   for (prop in recordItem.record) {
  //     string += prop + ':\t' + recordI
  //   }
  // }

};


module.exports = RecordStore;