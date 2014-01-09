"use strict";

var mimik = require('../bin/mimik'),
    should = require('should');

describe('Boolean generator', function() {
    it('should be able to mimic a single boolean', function(done) {
        var result;
        
        result = mimik(true);
        result.should.be.a.Boolean;
        
        done();
    });
});