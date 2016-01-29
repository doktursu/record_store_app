var Store = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = {};
};

Store.prototype = {
  addItem: function(item, quantity){
    var quantity = quantity || 0;
    if(item.id in this.inventory){
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
    for (id in this.inventory) {
      var entry = this.inventory[id];
      var quantityString = '\nquant:\t' + entry.quantity;
      entries.push(entry.item.stringify() + quantityString);
    }
    entries = entries.join('\n\n');
    console.log(entries);
    return entries;
  },
  sell: function(item, quantity){
    if(this.inventory[item.id]){
      this.inventory[item.id].quantity -= quantity;
      this.balance += item.price * quantity;
    }
  },
  inStock: function(item){
    if(this.inventory[item.id]){
      if(this.inventory[item.id].quantity > 0)
        return true;
      return false;
    }
  },
  hasItem: function(item){
    if(this.inventory[item.id])
      return true;
    return false;
  },
  inventoryValue: function(){
    var value = 0;
    for(id in this.inventory){
      var entry = this.inventory[id];
      value += entry.item.price * entry.quantity;
    }
    return value;
  },
  findItemBy: function(prop, value){
    var results = [];
    for(id in this.inventory){
      if(this.inventory[id].item[prop] == value){
        results.push(this.inventory[id].item);
      }
    }
    return results;
  },
};


module.exports = Store;