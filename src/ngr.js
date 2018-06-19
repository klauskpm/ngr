module.exports = (fs) => {
  return {
    setup: async (callback) => {
      await fs.writeFile('ngr.json', 'conteudo', callback);
    },
  };
};
