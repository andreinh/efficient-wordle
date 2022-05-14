export const letterFrequencyMap = (wordsArr) => {
  var freq = {};
  wordsArr.forEach((word) => {
    for (var i = 0; i < word.length; i++) {
      let char = word.charAt(i);
      if (freq[char]) {
        freq[char]++;
      } else {
        freq[char] = 1;
      }
    }
  });
  return freq;
};
