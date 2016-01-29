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
    store = new RecordStore('Kush Records', 'Parsippany', 2000);
  });
  it('should have a name and city, balance, and records inventory', function(){
    expect(store.name).to.equal('Kush Records');
    expect(store.city).to.equal('Parsippany');
    expect(store.balance).to.equal(2000);
    expect(store.inventory).to.deep.equal({});
  });
});