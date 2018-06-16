const {exec} = require('child_process');

const pkg = require('../package');
const ngr = './src/index.js';

describe('ngr', () => {
  test('returns the package version when --version', (done) => {
    exec(`${ngr} --version`, (err, stdout, stderr) => {
      if (err) throw stderr;
      expect(stdout.replace('\n', '')).toBe(pkg.version);
      done();
    });
  });
});

