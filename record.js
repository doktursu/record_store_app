var _ = require('lodash');

var Record = function(name, artist, price){
  this.name = name;
  this.artist = artist;
  this.price = price;
  this.id = 'R' + _.uniqueId();
};

Record.prototype = {
  stringify: function(){
    var strings = [];
    for(prop in this){
      if(typeof this[prop] !== 'function'){
        strings.push(prop.slice(0,6) + ':\t' + this[prop]);
      }
    }
    return strings.join('\n');
  },
}

module.exports = Record;