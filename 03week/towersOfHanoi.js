'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}


// to move a piece from one stack to another uses the pop/push and shift/unshift methods
// there are four pieces that need to move from one stack to another
function movePiece(origin, auxDisc, destination) {
  origin.pop();
  destination.push(auxDisc);
}

function isLegal(originDisc, destination) {
  // the pieces can only be moved if they are to land on a larger piece
  // use if/else statement to determin if piece being moved is smaller/thinner than the last piece of the receiving stack
  // evaluate the propert
}
const destinationDisc = destination[destination.length - 1];
if (destination.length === 0) {
  return true;
} else if (originDisc < destinationDisc) {
  return true;
} else {
  return false;
}



function checkForWin() {
  (forEach) to check
  for the items in teh array.
  if(stacks.c.length === 4) {
    return console.log("You win");
  }
}
// use if/else statement to determine if all pieces are in one stack top down from smallest to largest
// use if else statement to


function towersOfHanoi(startStack, endStack) {
  const origin = stacks[startStack];
  const destination = stacks[endStack];
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, {
        a: [4, 3, 2],
        b: [1],
        c: []
      });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = {
        a: [],
        b: [4, 3, 2, 1],
        c: []
      };
      assert.equal(checkForWin(), true);
      stacks = {
        a: [1],
        b: [4, 3, 2],
        c: []
      };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}