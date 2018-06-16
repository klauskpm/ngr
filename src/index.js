#!/usr/bin/env node

const program = require('./program');
const ngr = require('./ngr')(program);

const [,, ...args] = process.argv;

if (!args.length) {
  ngr.help();
}

program.parse(process.argv);
