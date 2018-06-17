const fs = jest.genMockFromModule('fs');

const ngr = require('./ngr')(fs);

describe('ngr', () => {
  describe('#setup', () => {
    test('call fs#writeFile', () => {
      const callback = jest.fn();

      ngr.setup(callback);
      expect(fs.writeFile)
        .toHaveBeenCalledWith(
          'ngr.json',
          expect.any(String),
          callback
        );
    });
  });
});
