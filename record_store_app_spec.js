var expect = require('chai').expect;

var Record = require('./record');
var Store = require('./record_store');

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
  it('should be stringifiable', function(){
    expect(record.stringify()).to.equal('name:\tHome\nartist:\tNosaj Thing\nprice:\t8\nid:\tR5');
  });
});

describe('Store', function(){
  beforeEach(function createStore(){
    store = new Store('Kush Records', 'Parsippany', 2000);
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
    expect(store.inventory).to.deep.equal([]);
  });
  it('should be able to add records and quantities to the inventory', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addRecord(record, 10);
    expect(store.inventory[record.id].record).to.deep.equal(record);
    expect(store.inventory[record.id].quantity).to.equal(10);
  });
  it('should be able to list the items in the inventory', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addRecord(record, 10);
    var record = new Record('Drift', 'Nosaj Thing', 8.99);
    store.addRecord(record, 10);
    expect(store.listInventory()).to.equal('name:\tHome\nartist:\tNosaj Thing\nprice:\t8\nid:\tR7\nquant:\t10\n\nname:\tDrift\nartist:\tNosaj Thing\nprice:\t8.99\nid:\tR8\nquant:\t10');
  });
  it('should be able to add quantity to inventory', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addRecord(record, 10);
    store.addRecord(record, 8);
    expect(store.inventory[record.id].quantity).to.equal(18);
  });
  it('should add quantity of 0 when quantity is not passed', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addRecord(record);
    expect(store.inventory[record.id].quantity).to.equal(0);
  });
});