module.exports = (fs) => {
  return {
    setup: (callback) => {
      fs.writeFile('ngr.json', 'conteudo', callback);
    },
  };
};
