var test = require('ava');
var stripLine = require('./');

test(function(t) {
  var testStr = 'line 1 #strip this\nline 2 some thing! also strip';
  t.assert(stripLine(testStr, ['#', '!']) === 'line 1\nline 2 some thing');
});
