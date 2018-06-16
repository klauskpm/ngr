#!/usr/bin/env node

const program = require('commander');
// const ora = require('ora');
// const chalk = require('chalk');
// const emoji = require('node-emoji');

const pkg = require('../package');
const [,, ...args] = process.argv;

program
  .version(pkg.version, '--version')
  .parse(process.argv);

if (!args.length) {
  program.outputHelp();
}
