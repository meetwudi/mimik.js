"use strict";

var mimik = require('../bin/mimik'),
    should = require('should');

describe('Number generator', function() {
    it('should be able to mimic a single integer', function(done) {
        var result;
        
        result = mimik(9);
        result.should.be.an.Number;
        result.should.be.within(0, 100);
        
        done();
    });
    
    it('should be able to mimic a single integer with custom options', function(done) {
        var result, 
            i;
        
        for (i = 0; i < 20; i = i + 1) {
            result = mimik(9, {min: 10, max: 12});
            result.should.be.an.Number;
            result.should.be.within(10, 12);
        }
        
        done();
    });
    
    it('should be able to mimic a single float number with custom options', function(done) {
        var result;
        
        result = mimik(9.74, {min:9.5, max:9.99});
        result.should.be.an.Number;
        result.should.be.within(9.5, 9.99);
        (result%1).should.not.equal(0);
        
        done();
    });
});