#!/usr/bin/env node
/* eslint-disable node/shebang */

const fs = require('fs');
const commander = require('commander');
const ngr = require('./ngr')(fs);
const program = require('./program')(ngr, commander).init();

const [,, ...args] = process.argv;

if (!args.length) {
  program.outputHelp();
}

program.parse(process.argv);
