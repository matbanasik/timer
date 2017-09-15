
let minutes = 0;
let seconds = 0;
let msc = 0;

let appendMsc = document.getElementById("msc");
let appendSeconds = document.getElementById("seconds");
let appendMinutes = document.getElementById("minutes");



let buttonStart = document.getElementById("start");
let buttonStop = document.getElementById("stop");
let buttonReset = document.getElementById("reset");
let buttonResume = document.getElementById("resume");

buttonStart.onclick = function () {
interval = setInterval(stopwatch, 10);
}

buttonStop.onclick = function () {
clearInterval(interval);
buttonStart.disabled = true;
}


buttonReset.onclick = function () {
clearInterval(interval);
hours = 0;
minutes = 0;
seconds = 0;
msc = 0;
appendMsc.innerHTML = ":00";
appendSeconds.innerHTML = ":00";
appendMinutes.innerHTML = "00";

}

buttonResume.onclick = function () {
interval = setInterval(stopwatch, 10);
}


function stopwatch() {
    if(msc < 99){
        msc++;
        if(msc < 10){
            msc = "0" + msc;
        }
        appendMsc.innerHTML = ":" + msc;
    }
    
    if (msc == 99){
        msc = -1;
    }
    
    if (msc == 0){
        seconds++;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        appendSeconds.innerHTML = ":" + seconds;
    }
    if (seconds == 59){
        seconds = -1;
    }
    
    if (msc == 0 && seconds == 0){
        minutes++;
        if (minutes < 10){
        appendMinutes.innerHTML = "0" + minutes;
        }

} 
}
    