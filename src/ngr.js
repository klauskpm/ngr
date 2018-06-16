module.exports = (program) => {
  return {
    help: () => {
      return program.outputHelp();
    },
  };
};
