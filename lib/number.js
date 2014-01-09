/*
 *  Generate random number
 *  options: 
 *      'min': minimun value of random number
 *      'max': maximun value of random number
 */

"use strict";

var _ = require('underscore');

var defaultOptions = {
    min: 0,
    max: 100
}, 
    userOptions = null,
    result = null;

function _getOptionByKey(key) {
    return userOptions[key] ? userOptions[key] : defaultOptions[key];
}

function _isInteger(number) {
    return number % 1 === 0;
}

function match(input, userOptions) {
    return _.isNumber(input);
}

function generate(input, options) {
    userOptions = options;
    var min, max;
    
    if (_isInteger(input)) {
        // generate a integer
        result = _.random(Math.floor(_getOptionByKey('min')), 
                          Math.floor(_getOptionByKey('max')));
    }
    else {
        // generator a float number
        min = Math.floor(_getOptionByKey('min') * 100);
        max = Math.floor(_getOptionByKey('max') * 100);
        
        result = _.random(min, max) / 100;
    }
    
    userOptions = null;
    return result;
}

module.exports = {
    match: match,
    generate: generate
};