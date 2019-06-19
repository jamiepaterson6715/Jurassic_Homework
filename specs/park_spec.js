const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
  park = new Park('Jurassic', 99);
});

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic')

  });


  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 99)

  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collection;
    assert.deepStrictEqual(actual, []);

  });



  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
