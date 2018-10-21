const assert = require('chai').assert;
const ConvertHandler = require('../controllers/convertHandler.js');

const convertHandler = new ConvertHandler();

describe('MyApp', function(){
  describe('getNum', function(){
    it('getNum should return 32', function(){
      let input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
    });
    it('Decimal input shoul return decimal num', function() {
      let input = '32.3L';
      assert.equal(convertHandler.getNum(input), 32.3);
    });
    it('fractional input should return an num', function(){
      let input = '1/4L';
      assert.equal(convertHandler.getNum(input), 0.25)
    })

  // describe('addNumbers()', function(){
  //   it('addNumbers 5 + 5 should equal 10', function(){
  //     let result = app.addNumbers(5,5);
  //     assert.equal(result, 10);
  //   });
  //   it('addNumbers should return type number', function() {
  //     let result = app.addNumbers(5,5);
  //     assert.typeOf(result, 'number')
  //   });
  });
});
