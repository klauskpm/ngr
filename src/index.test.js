const {exec} = require('child_process');

const pkg = require('../package');
const ngr = './src/index.js';

describe('cli', () => {
  test('returns the package version when --version', (done) => {
    exec(`${ngr} --version`, (err, stdout, stderr) => {
      if (err) throw stderr;
      expect(stdout.replace('\n', '')).toBe(pkg.version);
      done();
    });
  });

  test('returns --help when no option is passed', (done) => {
    exec(`${ngr}`, (err, stdout, stderr) => {
      if (err) throw stderr;
      expect(stdout.replace(`\n`, '')).not.toBe('');
      done();
    });
  });
});

