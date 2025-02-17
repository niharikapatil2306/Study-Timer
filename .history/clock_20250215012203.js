let timer;
let timeLeft = 50*60 // 50 minutes
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

function updateDisplay(){
    let minutes = Math.floor(timeLeft/60);
    let seconds = timeLeft%60;
    min.textContent = minutes.toString().padStart(2, "0");
    
}