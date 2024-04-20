const userchoice = document.querySelectorAll(".container div");
const gameresults = document.querySelector(".game");
const human = document.querySelector("#human");
const comp = document.querySelector("#computer");
const result = document.querySelector("#results");
const winselement = document.querySelector("#wins");
const loseelement = document.querySelector("#losses");
const drawelement = document.querySelector("#draw");
const resetbtn = document.querySelector("#rst-btn");
const emojis = ["👊", "🤚", "✌️"];
let wins = 0;
let losses = 0;
let draw = 0;
userchoice.forEach((currentItem) => {
  currentItem.addEventListener("click", () => {
    gameresults.style.display = "flex";
    human.innerHTML = currentItem.innerHTML;
    comp.textContent = emojis[Math.floor(Math.random() * 3)];
    let slogan = rockPaperScissors(human.textContent, comp.textContent);
    result.innerHTML = slogan;
    winselement.innerHTML = wins + ", ";
    loseelement.innerHTML = losses + ", ";
    drawelement.innerHTML = draw + ", ";
  });
});

resetbtn.addEventListener("click", () => {
  winselement.innerHTML = "0, ";
  loseelement.innerHTML = "0, ";
  drawelement.innerHTML = "0, ";
  wins = 0;
  losses = 0;
  draw = 0;
});

function rockPaperScissors(human, comp) {
  if (human === comp) {
    ++draw;
    return "It's a tie!";
  } else if (
    (human === "👊" && comp === "✌️") ||
    (human === "🤚" && comp === "👊") ||
    (human === "✌️" && comp === "🤚")
  ) {
    ++wins;
    return "You win!";
  } else {
    ++losses;
    return "Computer wins!";
  }
}
