const program = jest.genMockFromModule('./program');

program.outputHelp = () => {
  return 'help';
};

const ngr = require('./ngr')(program);

describe('ngr', () => {
  describe('help', () => {
    test('return the help message', () => {
      const text = ngr.help();
      expect(text).toBe('help');
    });
  });
});
