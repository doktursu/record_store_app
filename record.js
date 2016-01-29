var _ = require('lodash');

var Record = function(name, artist, price){
  this.name = name;
  this.artist = artist;
  this.price = price;
  this.id = _.uniqueId();
};

module.exports = Record;