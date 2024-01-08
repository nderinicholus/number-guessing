// Step 1: Define min & max values as well as the answer. All const
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// Step 2: Define attempts, running as well as guess. All let
let attempts = 0;
let guess;
let running = true;

// Step 3: Check the guess and validate. Add attempts
while (running) {
  guess = window.prompt(`Enter a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);

  // Step 4: Is the guess NAN 
  if (isNaN(guess)) {
    window.alert("Please enter a valid guess");
  }
  // Step 5: Is Number less than minNum or more than maxNum
  else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid guess");
  }
  // Guess is a valid number
  else {
    attempts++
    if (guess < answer) {
      window.alert("Too LOW! Try again!");
    } else if (guess > answer) {
      window.alert("Too HIGH! Try again!");
    } else {
      window.alert(`CORRECT! The answer is ${answer}. It took you ${attempts} attempts`);
      running = false;
    }
  
  }
}