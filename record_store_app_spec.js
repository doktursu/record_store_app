var expect = require('chai').expect;

var Record = require('./record');
var RecordStore = require('./record_store');

describe('Record', function(){
  it('should have a name, artist, and price', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    expect(record).to.deep.equal({name: 'Home', artist: 'Nosaj Thing', price: 8});
  });
});

describe('Record Store', function(){
  beforeEach(function createRecordStore(){
    store = new RecordStore('Kush Records', 'Parsippany')
  });
  it('should have a name, city, and records inventory', function(){
    expect(store).to.deep.equal({name: 'Kush Records', city: 'Parsippany', inventory:{}});
  });
});