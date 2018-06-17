const fs = require('fs');
const program = require('commander');

const pkg = require('../package');
const ngr = require('./ngr')(fs);

program.version(pkg.version, '--version');

program
  .command('setup')
  .action(ngr.setup);

module.exports = program;
