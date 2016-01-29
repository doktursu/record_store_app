var RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
};

RecordStore.prototype = {
  addRecord: function(record, quantity){
    if(this.inventory[record.id]) {
      this.inventory[record.id].quantity += quantity;
    }else{
      this.inventory[record.id] = {
        record: record,
        quantity: quantity
      };
    }
  },
  listInventory: function(){
    var entries = [];
    for (key in this.inventory) {
      var entry = this.inventory[key];
      var quantityString = '\nquant:\t' + entry.quantity;
      entries.push(entry.record.stringify() + quantityString);
    }
    entries = entries.join('\n\n');
    console.log(entries);
    return entries;
  },
  // stringify: function(recordItem){
  //   var string = '';
  //   for (prop in recordItem.record) {
  //     string += prop + ':\t' + recordI
  //   }
  // }

};


module.exports = RecordStore;