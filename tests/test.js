  'use strict'
var chai = require('jasmine');
//var expect = chai.expect;
var myApp = require('../app/libray.js')

describe("ArithGeo tests ", function() {
  describe("Case for Arithmetic progression array", function() {

    it("should return 'arithmtic'", function() {
      expect(myApp.arithGeo([1,2,3,4,5])).toEqual("arithmetic");
    });

    it("should return arithmtic", function() {
      expect(myApp.arithGeo([12,13,14,15])).toEqual("arithmetic");
    });

    it("should return arithmtic", function() {
      expect(myApp.arithGeo([112,113,114,115])).toEqual("arithmetic");
    });
    it("should return arithmtic", function() {
      expect(myApp.arithGeo([120,130,140,150])).toEqual("arithmetic");
    });
    it("should return arithmtic", function() {
      expect(myApp.arithGeo([10,20,30,40])).toEqual("arithmetic");
    });

  });
});
describe("ArithGeo tests ", function() {

    it("should return  'geometric'", function() {
      expect(myApp.arithGeo([2,4,8,16])).toBe("geometric");
    });

    it("should return  'geometric'", function() {
      expect(myApp.arithGeo([10,100,1000,10000])).toBe("geometric");
    });

    it("should return  'geometric'", function() {
      expect(myApp.arithGeo([3,6,12,24])).toBe("geometric");
    });

    it("should return  'geometric'", function() {
      expect(myApp.arithGeo([4,12,36])).toBe("geometric");
    });

    it("should return  'geometric'", function() {
      expect(myApp.arithGeo([5,25,125,625])).toBe("geometric");
    });

});
