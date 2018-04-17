export default class Tree {
  constructor(words) {
    this.SAMPLE_SIZE = 10;

    this.words = words;

    let index = 0;
    this.tree = {
      _streets: new Array(this.SAMPLE_SIZE).fill().map(() => index++),
    };

    for (let k = 0; k < this.words.length; k++) {
      const word = words[k].toLowerCase();

      for (let j = 0; j < word.length; j++) {
        let node = this.tree;

        for (let i = j; i < word.length; i++) {
          const letter = word[i];
          if (!node[letter]) {
            node[letter] = {
              _words: [],
            };
          }
          if (node[letter]._words.length < this.SAMPLE_SIZE) {
            node[letter]._words.push(k);
          }
          node = node[letter];
        }
      }
    }
  }

  find(input) {
    let node = this.tree;
    for (let i = 0; i < input.length; i++) {
      node = node[input[i]];
    }

    return node._words.map(index => this.words[index]);
  }
}
