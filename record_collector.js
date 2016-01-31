var Store = require('./record_store');

var RecordCollector = function(name, city, balance){
  Store.apply(this, arguments);
};

RecordCollector.prototype = Object.create(Store.prototype);

RecordCollector.prototype = {
  addRecord: function(record, quantity){

  }
  // buyRecord: function(record, quantity){

  // };
};

module.exports = RecordCollector;
