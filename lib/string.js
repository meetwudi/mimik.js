/*
 *  Generate random string
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
    return false;
}

function generate(input, options) {
    userOptions = options;
    
    userOptions = null;
    return result;
}

module.exports = {
    match: match,
    generate: generate
};