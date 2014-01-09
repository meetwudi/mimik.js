#mimik.js [![Build Status](https://travis-ci.org/tjwudi/mimik.js.png?branch=master)](https://travis-ci.org/tjwudi/mimik.js)
mimik.js mimics all kinds of fun stuffs (string, number, object, etc.). It's fun, it can be helpful when you are creating test cases and want to generate random stuffs based on a template rather than some rules. Pure rules just look unnatural.  
Have fun!

#installation
Well, as you know
```
$ [sudo] npm install mimik
```

#usage
##mimic a single identity
```
var mimik = require('mimik'); // this line will not be shown in following code snippets
var template = 1;
var randomNumber = mimik(template); // randomNumber <- 100 (or other numbers)
```
You can also specify some options (see comments in lib/*.js). For example, you can specify the min and max value of number.
```
var template = 1;
var randomNumber = mimik(template, {min: 19, max:27}); // randomNumber <- 20
```
##mimic an array of identities
```
var template = [1, 2, 7, "a string", true];    
var randomStuffs = [8, 7, 9, "AzEfgx", false]; // all random stuffs
```
##on failure
When it fails to mimic, you get a `null`, which is so sad.
##currently supported templates
Mimik can now mimic: 
- number(s)
- boolean(s)
- array of types mentioned above (can be mixed)

#testing
```
$ npm test
```

#contributing
It's just like a playground. If you have time, just enjoy contributing to mimik, or, have a cup of coffee. ;)
Mimik is not smart enough now. If you are interested to make it more clever and powerful, [let me know](mailto://webmaster@leapoahead.com)!

#Is 'mimik' a typo?
No, it's just because naming conflict on [npmjs.org](http://npmjs.org).