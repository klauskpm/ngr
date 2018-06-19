module.exports = (fs) => {
  return {
    setup: async (callback) => {
      const json = {
        projects: [],
        rootProject: '',
        applications: [],
        libraries: [],
      };
      await fs.writeFile('ngr.json', JSON.stringify(json, null, 2), callback);
    },
  };
};
