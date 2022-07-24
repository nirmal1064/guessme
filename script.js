const numberInput = document.querySelector("#number-input");
const btn = document.querySelector("#guess");
const clearBtn = document.querySelector("#clear");
const result = document.querySelector("#result");
const min = 1;
const max = 9;
const maxTries = 10;
let tries = 0;
let score = 0;

clearBtn.addEventListener("click", () => {
  result.textContent = "";
  numberInput.value = "";
  score = 0;
  tries = 0;
});

const setResult = (msg) => {
  result.textContent = msg;
  result.className = "result";
  score = 0;
  tries = 0;
};

const guessNumber = () => {
  const currentNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  const input = Number(numberInput.value);
  if (input === "" || input < 1 || input > 9) {
    result.textContent = "Please enter a number between 1 and 9";
    return;
  }
  tries++;
  if (tries === maxTries && input === currentNumber) {
    score++;
    setResult(`Correct! Your Overall score is ${score}/${maxTries}`);
  } else if (tries === maxTries && input !== currentNumber) {
    setResult(`InCorrect! Your Overall score is ${score}/${maxTries}`);
  } else if (input === currentNumber) {
    score++;
    result.textContent = "You guessed correctly!";
    result.className = "correct";
  } else {
    result.textContent = `You guessed incorrectly! The number was ${currentNumber}`;
    result.className = "failure";
  }
  numberInput.value = "";
};

btn.addEventListener("click", guessNumber);
