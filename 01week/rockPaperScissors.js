'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  // there are two players, I'll call them hand1 and hand2


  // if hand1 is rock and hand2 is paper then hand2 wins
  if (hand1.toLowerCase().replace(/ /g, '') === 'rock' && hand2.toLowerCase().replace(/ /g, '') = 'paper') {
    return "Hand two wins!"
  } else


    // if hand1 is rock and hand2 is scissors then hand1 wins
    if (hand1.toLowerCase().replace(/ /g, '') === 'rock' && hand2.toLowerCase().replace(/ /g, '') = 'scissors') {
      return "Hand one wins!"
    } else

      // if hand1 is scissors and hand2 is rock then hand2 wins
      if (hand1.toLowerCase().replace(/ /g, '') === 'scissors' && hand2.toLowerCase = 'rock') {
        return "Hand two wins!"
      } else

        // if hand1 is scissors and hand2 is paper then hand1 wins
        if (hand1.toLowerCase().replace(/ /g, '') === 'scissors' && hand2.toLowerCase = 'paper') {
          return "Hand one wins!"
        } else

          // if hand1 is paper and hand2 is rock then hand1 wins
          if (hand1.toLowerCase().replace(/ /g, '') === 'paper' && hand2.toLowercase = 'rock') {
            return "Hand one wins!"
          } else

            // if hand1 is paper and hand2 is scissors then hand2 wins
            if (hand1.toLowerCase().replace(/ /g, '') === 'paper' && hand2.toLowerCase = 'scissors') {
              return "Hand two wins!"
            } else

              // if hand1 and hand2 are the same it is a tie
              if (hand1.toLowerCase().replace(/ /g, '') === hand2.toLowerCase().replace(/ /g, '')) {
                return "It's a tie!"
              } else

  // Write code here

}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}