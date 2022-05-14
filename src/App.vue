1
<template>
  <div id="app">
    <h1>Wordle Optimizer</h1>
    <h4>Created by Andrei Jungkman</h4>
    <div>
      {{ wordsText }}
    </div>
  </div>
</template>

<script>
import EfficientGame from './components/EfficientGame.vue';
const wordsText = require('/assets/words.txt');

export default {
  name: 'App',
  components: {
    EfficientGame,
  },
  created() {
    this.currWordsArr = this.wordsArray();
  },
  data() {
    return {
      attemptStarted: false,
      currWordsArr: null,
    };
  },
  computed: {
    wordsArray() {
      return wordsText;
    },
    letterFreqMap() {
      return letterFrequencyMap(this.currWordsArr);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
