const program = require('commander');

const pkg = require('../package');

program.version(pkg.version, '--version');

module.exports = program;
