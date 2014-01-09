"use strict";

var mimik = require('../bin/mimik'),
    should = require('should');

describe('Mixed generator', function() {
    it('should be able to mimic an array of numbers and booleans', function(done) {
        var result;
        
        result = mimik([true, 4], {min: 9, max: 19});
        result[0].should.be.a.Boolean;
        result[1].should.be.an.Number;
        result[1].should.be.within(9, 19);
        
        done();
    });
});