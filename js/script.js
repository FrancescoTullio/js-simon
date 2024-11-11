/** variabili globali */
let t = 5;
const randomNum = [];


/**acquisisco bottone */
const btnStart = document.getElementById("start")

/**acquisisco i div */
const introDiv = document.getElementById("intro");
const timerDiv = document.getElementById("timer");
const numberDiv = document.getElementById("number");
const formDiv = document.getElementById("form");


/**acquisisco il countdown */

const countdown = document.getElementById("countdown")

/**acquisisco i numeri */
const primo = document.getElementById("primo");
const secondo = document.getElementById("secondo");
const terzo = document.getElementById("terzo");
const quarto = document.getElementById("quarto");
const quinto = document.getElementById("quinto");


/**metto i numeri dentro la variabile */

for(let i = 0; i <= 5; i++){
    const curNumber = randomizzatore(1, 99);
    randomNum.push(curNumber);
}

btnStart.addEventListener("click", function () {
    introDiv.classList.add("d-none");
    timerDiv.classList.remove("d-none")
    const startGame = setInterval(function(){
        countdown.innerHTML = t;
        if(t === 0){
            clearInterval(startGame);
            timerDiv.classList.add("d-none");
            numberDiv.classList.remove("d-none");
            secondCounter();
        }
        t--;

        primo.innerHTML = randomNum[1];
        secondo.innerHTML = randomNum[2];
        terzo.innerHTML = randomNum[3];
        quarto.innerHTML = randomNum[4];
        quinto.innerHTML = randomNum[5];

        
      }, 1000);
      

})





/**funzione randomizzatore */

function randomizzatore(max, min) {
    const numeroTemporaneo = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroTemporaneo
}

function secondCounter() {
    setTimeout(function(){
        numberDiv.classList.add("d-none");
        formDiv.classList.remove("d-none");
    },5000)
}