#!/usr/bin/env node
var sh = require('./sh');

sh.rm('./out/src');
sh.mkdir('./out/src');
console.log('Run 1.');
sh.exec('./node_modules/.bin/babel --out-dir out/src src');
console.log('Run 2.');
sh.chmod('./out/src/ESDocCLI.js', '755');
console.log('Run 3.');
sh.cp('./src/Publisher/Builder/template/', './out/src/Publisher/Builder/template/');

// build test
sh.rm('./out/test/src');
sh.mkdir('./out/test/src');
sh.exec('./node_modules/.bin/babel --out-dir out/test/src test/src');
