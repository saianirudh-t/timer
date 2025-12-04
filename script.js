let setTime = document.getElementById("setTime");
let timeDetails = document.querySelector(".timeDetails");
let timeVal = document.getElementById("timeVal");
let enterBtn = document.querySelector(".timeDetails button");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let start=document.getElementById("start")
let stop=document.getElementById("stop")

setTime.addEventListener("click", (e) => {
    e.preventDefault();

    if (timeDetails.style.display === "block") {
        timeDetails.style.display = "none";
    } else {
        timeDetails.style.display = "block";
    }
});

enterBtn.addEventListener("click", () => {
    let minVal = timeVal.value;
    if (minVal === "") return; 
    min.textContent = minVal.padStart(2, "0");
    sec.textContent = "00";
    console.log("Minutes set:", minVal);
    timeDetails.style.display = "none";
});

start.addEventListener("click",timer)

function timer(){
    let secVal=60
    minVal=Number(min.textContent)
    let timer=setInterval(() => {
        secVal--
        sec.textContent=secVal
        if(secVal==0){
            secVal=60
            minVal--
            min.textContent=minVal
        }
    },1000);
}