export const wordsAsArray = () => {
  var fs = require('fs');
  var words = fs.readFileSync('./assets/words.txt');
  return words.split('\n');
  ß;
};
