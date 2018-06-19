const fs = jest.genMockFromModule('fs');

const ngr = require('./ngr')(fs);

describe('ngr', () => {
  describe('#init', () => {
    test('call fs#writeFileSync', () => {
      ngr.init();
      expect(fs.writeFileSync)
        .toHaveBeenCalledWith(
          'ngr.json',
          expect.any(String)
        );
    });
  });
});
