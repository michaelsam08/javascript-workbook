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

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (origin, originDisc, destination) => {
  origin.pop();
  destination.push(originDisc);
}
// Your code here
//I will use if/else statements to move discs on stacks.
//there are 3 stacks. abc
//startStack is 4 discs 234 start on stack a.
//if startStack is a, else endStack can be stack b or c
//if startStack is b, else end Stack can be stack a or c.
// if startStack is c, then endStack can be a or b.
//large disc cannot be placed on top of a smaller disc. run isLegal
//myArray.push("this"); // push a string on the stack at the end
// var a = myArray.pop(); // pops the last element from the stack
// console.log(a); // prints "!"
// console.log(myArray); // prints ["this", "is", "neat"]

const isLegal = (originDisc, destination) => {
  // Your code here
  //a disc can move across any stack
  //large disc cannot be placed on top of a smaller disc.
  //I will need to use an if/else statement to determine if the move is legal or not legal.
  // if disc is 1 or 2 or 3 or 4 and stack contains no discs, then move is legal.
  //Legal move – move one piece at a time, piece can go only on the bigger piece or on the empty spot
  //disc from origin bigger than the disc on the destination
  const destinationDisc = destination[destination.length - 1];
  if (destination.length === 0) {
    return true;
  } else if (originDisc < destinationDisc) {
    return true;
  } else {
    return false;
  }
}
const checkForWin = () => {
  // Your code here
  //a win is true when in the stacks variable in object c, 4321 is in the array.
  //I will use an if/else statement to check for true/false and probably need a for loop (forEach) to check for the items in teh array.
  if (stacks.c.length === 4 || stacks.b.length === 4) {
    console.log("You win");
    resetGame();

  } else {
    //false;
    getPrompt()
  }
}
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  //it's a loop that calls movePiece for each element in the stack to the endStack
  const origin = stacks[startStack];
  const destination = stacks[endStack];
  if (!origin.length) {
    return console.log("There are no discs on the stack");
  }
  const originDisc = origin[origin.length - 1];
  if (!isLegal(originDisc, destination)) {
    return console.log("This is a not a legal move");
  }
  movePiece(origin, originDisc, destination);
  checkForWin();
  resetGame();
}
//reset the game
const resetGame = () => {
  stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
  }
  getPrompt();
};

const getPrompt = () => {
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