var Store = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
};

Store.prototype = {
  addItem: function(item, quantity){
    var quantity = quantity || 0;
    if(this.inventory[item.id]) {
      this.inventory[item.id].quantity += quantity;
    }else{
      this.inventory[item.id] = {
        item: item,
        quantity: quantity
      };
    }
  },
  listInventory: function(){
    var entries = [];
    for (key in this.inventory) {
      var entry = this.inventory[key];
      var quantityString = '\nquant:\t' + entry.quantity;
      entries.push(entry.item.stringify() + quantityString);
    }
    entries = entries.join('\n\n');
    console.log(entries);
    return entries;
  },
  sell: function(item, quantity){
    if(this.hasItem(item)){
      this.inventory[item.id].quantity -= quantity;
      this.balance += item.price * quantity;
    }
  },
  inStock: function(item){
    if(this.hasItem(item)){
      if(this.inventory[item.id].quantity > 0)
        return true;
      return false;
    }
  },
  hasItem: function(item){
    if(item.id in this.inventory)
      return true;
    return false;
  },

};


module.exports = Store;