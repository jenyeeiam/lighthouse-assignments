var assert = require("chai").assert;
var isValidLuhn = require("./luhnFn");

describe("Luhn", function() {
  it("should return false if the check digit doesn't match the last digit", function() {
    var result = isValidLuhn("79927398710");
    assert.isFalse(result);
  });

  it("should return true if the check digit does match the last digit", function() {
    var result = isValidLuhn("79927398713");
    assert.isTrue(result);
  });
});

