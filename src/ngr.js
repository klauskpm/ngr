module.exports = (fs) => {
  return {
    setup: () => {
      fs.writeFile('ngr.json', 'conteudo', function(err) {
        if (err) {
          return console.log(err);
        }

        console.log('The file was saved!');
      });
    },
  };
};
