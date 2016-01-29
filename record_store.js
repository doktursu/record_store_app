var Store = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
};

Store.prototype = {
  addRecord: function(record, quantity){
    var quantity = quantity || 0;
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
  sell: function(record, quantity){
    this.inventory[record.id].quantity -= quantity;
    this.balance += record.price * quantity;
  },

};


module.exports = Store;