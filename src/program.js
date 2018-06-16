const program = require('commander');

const pkg = require('../package');

program
  .version(pkg.version, '--version')
  .parse(process.argv);

module.exports = program;
