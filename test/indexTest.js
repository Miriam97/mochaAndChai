const assert = require('chai').assert;
const testMe = require('../index.js').testMe;

describe('index', function() {
  it('testMe should return 3 more than input', function() {
    let result = testMe(5);
    assert.equal(result,8);
  });
  it('testMe should return a number', function() {
    let result = testMe(5);
    assert.typeOf(result,'number');
  });
});
