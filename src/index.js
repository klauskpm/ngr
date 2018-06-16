#!/usr/bin/env node

const program = require('commander');
// const ora = require('ora');
// const chalk = require('chalk');
// const emoji = require('node-emoji');

const pkg = require('../package');
// const [,, args] = process.argv;

program
  .version(pkg.version, '-v, --version');

program.parse(process.argv);
