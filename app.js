const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const p1Button = document.querySelector("#p1button");
const p2Button = document.querySelector("#p2button");
const reset = document.querySelector("#Reset")

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let GameOver = false;

p1Button.addEventListener("click", function () {
    if (!GameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            GameOver = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener("click", function () {
    if (!GameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            GameOver = true;
        }
        p2Display.textContent = p2Score;
    }
})

reset.addEventListener("click", function () {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
})
