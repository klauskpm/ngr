const fs = jest.genMockFromModule('fs');

fs.writeFile = jest.fn();

const ngr = require('./ngr')(fs);

describe('ngr', () => {
  describe('#setup', () => {
    test('call fs#writeFile', () => {
      ngr.setup();
      expect(fs.writeFile)
        .toHaveBeenCalledWith(
          'ngr.json',
          expect.any(String),
          expect.any(Function)
        );
    });
  });
});
