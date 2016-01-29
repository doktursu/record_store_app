var expect = require('chai').expect;

var Record = require('./record');

describe('Record', function(){
  it('should have a name, artist, and price', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    expect(record).to.deep.equal({name: 'Home', artist: 'Nosaj Thing', price: 8});
  });
});