const player1 = {
    score: 0,
    button: document.querySelector("#p1button"),
    display: document.querySelector("#p1Display"),
}

const player2 = {
    score: 0,
    button: document.querySelector("#p2button"),
    display: document.querySelector("#p2Display"),
}

const reset = document.querySelector("#Reset")
const winningScoreSelect = document.querySelector("#playTo")

let GameOver = false;
let winningScore = 5;

function updateScore(player, opponent){
    if (!GameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            GameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        } else {
        }
        player.display.textContent = player.score;

    }
}


winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    console.log(winningScore)
    Reset();
})


function Reset() {
    GameOver = false;
    for(let p of [player1,player2]){
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove("has-text-danger", "has-text-success");
        p.button.disabled = false;
    }
}

player1.button.addEventListener("click", function(){
    updateScore(player1, player2);
});
player2.button.addEventListener("click", function(){
    updateScore(player2, player2);
});
reset.addEventListener("click", Reset)
