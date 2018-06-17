#!/usr/bin/env node

const program = require('./program');

const [,, ...args] = process.argv;

if (!args.length) {
  program.outputHelp();
}

program.parse(process.argv);
