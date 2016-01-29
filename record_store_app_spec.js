var expect = require('chai').expect;

var Record = require('./record');
var RecordStore = require('./record_store');

describe('Record', function(){
  beforeEach(function createRecord(){
    record = new Record('Home', 'Nosaj Thing', 8);
  });
  it('should have a name', function(){
    expect(record.name).to.equal('Home');
  });
  it('should have a artist', function(){
    expect(record.artist).to.equal('Nosaj Thing');
  });
  it('should have a price', function(){
    expect(record.price).to.equal(8);
  });
  it('should have a uniqueId number', function(){
    expect(record.id).to.be.a('string');
  });
});

describe('Record Store', function(){
  beforeEach(function createRecordStore(){
    store = new RecordStore('Kush Records', 'Parsippany', 2000);
  });
  it('should have a name', function(){
    expect(store.name).to.equal('Kush Records');
  });
  it('should have a city', function(){
    expect(store.city).to.equal('Parsippany');
  });
  it('should have a balance', function(){
    expect(store.balance).to.equal(2000);
  });
  it('should have an empty records inventory', function(){
    expect(store.inventory).to.deep.equal({});
  });
});