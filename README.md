strip-line
========
[![build status](https://secure.travis-ci.org/ruanyl/strip-line.svg)](http://travis-ci.org/ruanyl/strip-line)
[![NPM version](https://badge.fury.io/js/strip-line.svg)](http://badge.fury.io/js/strip-line)

strip line

## Installation

This module is installed via npm:

``` bash
$ npm install strip-line
```

## Example Usage

``` js
var stripLine = require('strip-line');

test(function(t) {
  var testStr = 'line 1 #strip this\nline 2 some thing! also strip';
  t.assert(stripLine(testStr, ['#', '!']) === 'line 1\nline 2 some thing');
});
```
