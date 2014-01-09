/*
 *  Generate random number
 *  options: 
 *      none
 */

"use strict";

var _ = require('underscore');

var defaultOptions = {

}, 
    userOptions = null,
    result = null;

function _getOptionByKey(key) {
    return userOptions[key] ? userOptions[key] : defaultOptions[key];
}

function match(input, userOptions) {
    return _.isBoolean(input);
}

function generate(input, options) {
    userOptions = options;

    result = _.random(0, 1) === 0 ? true : false;
    
    userOptions = null;
    return result;
}

module.exports = {
    match: match,
    generate: generate
};