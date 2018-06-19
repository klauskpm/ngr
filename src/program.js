const pkg = require('../package');

module.exports = (ngr, commander) => {
  return {
    init: () => {
      commander.version(pkg.version, '--version');

      commander
        .command('setup')
        .action(() => {
          ngr.setup((err) => {
            if (err) throw err;
          });
        });

      return commander;
    },
  };
};
