"use strict";

var fs = require('fs'),
    _ = require('underscore');

var PATH_LIB = 'lib/',
    generatorFiles = fs.readdirSync(PATH_LIB);


function _mimik(input, options) {
    var output = null;
    
    if (_.isArray(input)) {
        output = [];
        _.each(input, function(inputItem) {
            output.push(_mimik(inputItem, options));
            
            if (output[output.length - 1] === null) {
                return null;
            }
        });
    }
    else {
        _.each(generatorFiles, function(generatorFile) {
            if (!! output) {
                return;
            }

            var generator = require('../' + PATH_LIB + generatorFile);
            if (generator.match(input, options)) {
                output = generator.generate(input, options);
            }
        });
    }
    
    return output;
}

function mimik(input, options) {
    return _mimik(input, options || {});
}

module.exports = mimik;