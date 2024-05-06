const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector("input"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word"),
  scoreText = document.querySelector(".score span");

let correctWord, timer;
let score = 0; // Initialize score

const letterScores = {
  a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8,
  k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1,
  u: 1, v: 4, w: 4, x: 8, y: 4, z: 10
};

const initTimer = maxTime => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return timeText.innerText = maxTime;
    }
    alert(`Time off! ${correctWord.toUpperCase()} was the correct word. Your score: ${score}`);
    initGame();
  }, 1000);
}

const initGame = () => {
  initTimer(30);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
}

const calculateScore = word => {
  let score = 0;
  for (let letter of word) {
    score += letterScores[letter] || 0; // Add the score of each letter
  }
  return score;
}

const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if (!userWord) return alert("Please enter the word to check!");
  if (userWord !== correctWord) return alert(`Oops! ${userWord} is not the correct word`);
  let wordScore = calculateScore(correctWord); // Calculate score for correct word
  score += wordScore; // Add score for correct word
  scoreText.innerText = score; // Update score display
  alert(`Congrats! ${correctWord.toUpperCase()} is the correct word. Your score: ${score}`);
  initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
