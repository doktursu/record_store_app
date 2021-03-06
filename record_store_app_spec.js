var expect = require('chai').expect;

var Record = require('./record');
var Store = require('./record_store');
var RecordCollector = require('./record_collector');

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
    expect(store.inventory).to.deep.equal({});
  });
  it('should be able to add records and quantities to the inventory', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addItem(record, 10);
    expect(store.inventory[record.id].item).to.deep.equal(record);
    expect(store.inventory[record.id].quantity).to.equal(10);
  });
  it('should be able to list the entries in the inventory', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addItem(record, 10);
    var record = new Record('Drift', 'Nosaj Thing', 8.99);
    store.addItem(record, 10);
    expect(store.listInventory()).to.equal('name:\tHome\nartist:\tNosaj Thing\nprice:\t8\nid:\tR7\nquanti:\t10\n\nname:\tDrift\nartist:\tNosaj Thing\nprice:\t8.99\nid:\tR8\nquanti:\t10');
  });
  it('should be able to add quantity to inventory', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addItem(record, 10);
    store.addItem(record, 8);
    expect(store.inventory[record.id].quantity).to.equal(18);
  });
  it('should add quantity of 0 when quantity is not passed', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addItem(record);
    expect(store.inventory[record.id].quantity).to.equal(0);
  });
  it('should be able to check whether an item is in inventory', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addItem(record, 10);
    var record2 = new Record('Drift', 'Nosaj Thing', 8.99);
    expect(store.hasItem(record)).to.equal(true);
    expect(store.hasItem(record2)).to.equal(false);
  });
  it('should be able to sell records, updating its inventory and balance', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addItem(record, 10);
    store.sell(record, 2);
    expect(store.inventory[record.id].quantity).to.equal(8);
    expect(store.balance).to.equal(2016);
  });
  it('should not be able to oversell an item', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addItem(record, 2);
    store.sell(record, 4);
    expect(store.inventory[record.id].quantity).to.equal(2);
    expect(store.balance).to.equal(2000);
  });
  it('should check whether an item is in stock', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addItem(record, 10);
    var record2 = new Record('Drift', 'Nosaj Thing', 8.99);
    store.addItem(record2);
    expect(store.inStock(record)).to.equal(true);
    expect(store.inStock(record2)).to.equal(false);
  });
  it('should be able to caluculate inventory value', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addItem(record, 10);
    expect(store.inventoryValue()).to.equal(80);
  });
  it('should be able to report financial situation of store', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addItem(record, 10);
    var record2 = new Record('Home', 'Rudimental', 7);
    store.addItem(record2, 1);
    store.sell(record, 2);
    expect(store.reportFinance()).to.equal(2087);
  });
  it('should be able to find item by name', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addItem(record, 10);
    var found = store.findItemBy('name', 'Home');
    expect(found[0]).to.deep.equal(record);
  });
  it('should be able to find item by artist', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addItem(record, 10);
    var found = store.findItemBy('artist', 'Nosaj Thing');
    expect(found[0]).to.deep.equal(record);
  });
  it('should be able to find multiple items', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    store.addItem(record, 10);
    var record2 = new Record('Home', 'Rudimental', 7);
    store.addItem(record2, 1);
    var found = store.findItemBy('name', 'Home');
    expect(found).to.deep.equal([record, record2]);
  });
});

describe('Record Collector', function(){
  beforeEach(function createCollector(){
    collector = new RecordCollector('Joe', 'Boonton', 100);
  })
  it('should have a name', function(){
    expect(collector.name).to.equal('Joe');
  });
  it('should have a city', function(){
    expect(collector.city).to.equal('Boonton');
  });
  it('should have a balance', function(){
    expect(collector.balance).to.equal(100);
  });
  it('should have an empty record collection', function(){
    expect(collector.inventory).to.deep.equal({});
  });
  it('should be able to sell records, updating its inventory and balance', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    collector.addItem(record, 10);
    collector.sell(record, 2);
    expect(collector.inventory[record.id].quantity).to.equal(8);
    expect(collector.balance).to.equal(116);
  });
  it('should be able to buy records, updating its inventory and balance', function(){
    var record = new Record('Home', 'Nosaj Thing', 8);
    collector.buyItem(record, 3);
    expect(collector.inventory[record.id].item).to.equal(record);
    expect(collector.inventory[record.id].quantity).to.equal(3);
    expect(collector.balance).to.equal(76);
  });
});