#!/usr/bin/env node

const {help} = require('./scripts');

const [,, ...args] = process.argv;

if (!args.length) {
  help();
}
