const program = require('./program');

const ngrStub = jest.genMockFromModule('./ngr');
const commanderStub = jest.genMockFromModule('commander');

commanderStub.command = () => {
  return commanderStub;
};

describe('program', () => {
  let programObj;

  beforeEach(() => {
    programObj = program(ngrStub, commanderStub);
  });

  test('must defined', () => {
    expect(program)
      .toBeDefined()
      .toBeFunction();
    expect(programObj)
      .toBeDefined()
      .toBeObject();
  });

  describe('#init', () => {
    test('return the program instance configured', () => {
      const newProgram = programObj.init();
      expect(newProgram)
        .toBeDefined();
    });
  });
});
