const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const p1Button = document.querySelector("#p1button");
const p2Button = document.querySelector("#p2button");
const reset = document.querySelector("#Reset")
const winningScoreSelect = document.querySelector("#playTo")

let p1Score = 0;
let p2Score = 0;
let GameOver = false;
let winningScore = 5; 

winningScoreSelect.addEventListener("change", function(){
    winningScore = parseInt(this.value);
    console.log(winningScore)
    Reset();
})

p1Button.addEventListener("click", function () {
    if(!GameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            GameOver = true;
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
        }else{
        }
        p1Display.textContent = p1Score;
        
    }
})

p2Button.addEventListener("click", function () {
    if(!GameOver){
        p2Score += 1;
        if(p2Score === winningScore){
            GameOver = true;
            p2Display.classList.add("winner");
            p1Display.classList.add("loser");
        }
        p2Display.textContent = p2Score;
    }
})

reset.addEventListener("click", Reset)


function Reset() {
    GameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("loser","winner");
    p2Display.classList.remove("loser","winner");
}