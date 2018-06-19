module.exports = (fs) => {
  return {
    init: () => {
      const json = {
        projects: [],
        rootProject: '',
        applications: [],
        libraries: [],
      };
      fs.writeFileSync('ngr.json', JSON.stringify(json, null, 2));
    },
  };
};
