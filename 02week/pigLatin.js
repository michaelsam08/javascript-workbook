'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'],
    const result = str.split('');
  if (vowels.includes(str.charAt(0))) {
    return str += 'way';
  } else {
    for (const i = 0; i < str.length; i++) {
      //! turns true into false and vice versa
      if (!vowels.includes(str[i])) {
        //shift removes the first item of the array and returns it
        result.push(result.shift());
      } else {
        result.push('ay');
        return result.join('');
      }
    }
  }
}
console.log(translatePigLatin('consonant'));


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}