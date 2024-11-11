/** variabili globali */
let t = 5;


/**acquisisco bottone */
const btnStart = document.getElementById("start")

/**acquisisco i div */
const introDiv = document.getElementById("intro");
const timerDiv = document.getElementById("timer");
const numberDiv = document.getElementById("number");


/**acquisisco il countdown */

const countdown = document.getElementById("countdown")

/**acquisisco i numeri */
const primo = document.getElementById("primo");
const secondo = document.getElementById("secondo");
const terzo = document.getElementById("terzo");
const quarto = document.getElementById("quarto");
const quinto = document.getElementById("quinto");

btnStart.addEventListener("click", function () {
    introDiv.classList.add("d-none");
    timerDiv.classList.remove("d-none")
    const startGame = setInterval(function(){
        countdown.innerHTML = t;
        if(t === 0){
            clearInterval(startGame);
            timerDiv.classList.add("d-none");
            numberDiv.classList.remove("d-none");
        }
        t--;

        primo.innerHTML = randomizzatore(1, 99);
        secondo.innerHTML = randomizzatore(1, 99);
        terzo.innerHTML = randomizzatore(1, 99);
        quarto.innerHTML = randomizzatore(1, 99);
        quinto.innerHTML = randomizzatore(1, 99);

      }, 1000)
})





/**funzione randomizzatore */

function randomizzatore(max, min) {
    const numeroTemporaneo = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroTemporaneo
}