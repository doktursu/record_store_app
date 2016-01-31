var Store = require('./record_store');

var RecordCollector = function(name, city, balance){
  Store.apply(this, arguments);
};

RecordCollector.prototype = Object.create(Store.prototype);

RecordCollector.prototype = {
  buyItem: function(record, quantity){
    // this.addItem
  }
};

module.exports = RecordCollector;
