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
    sec.textContent = seconds.toString().padStart(2, "0");
}

startBtn.addEventListener("click", () => {
    if(!timer){
        timer = setInterval(() => {
            if(timeLeft>0){
                timeLeft--;
                updateDisplay();
            }
            else{
                clearInterval(timer);
                timer = null;
                alert("Take a break!!")
            }
        }, 1000);
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    timeLeft = 50*60;
    updateDisplay();
});

