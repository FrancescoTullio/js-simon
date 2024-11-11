/** variabili globali */
let t = 5;
const randomNum = [];
console.log(randomNum);

/**valori delle risposte */
let oneValue = 0;
let twoValue = 0;
let treeValue = 0;
let forValue = 0;
let fiveValue = 0;




/**acquisisco bottone */
const btnStart = document.getElementById("start")
const btnRestart = document.getElementById("restart")

/**acquisisco i div */
const introDiv = document.getElementById("intro");
const timerDiv = document.getElementById("timer");
const numberDiv = document.getElementById("number");
const formDiv = document.getElementById("form");
const answrDiv = document.getElementById("answer");


/**acquisisto il nodo dei risultati */
const result = document.getElementById("risultati");
// console.log(result);


/**acquisisco il countdown */

const countdown = document.getElementById("countdown")

/**acquisisco i numeri */
const primo = document.getElementById("primo");
const secondo = document.getElementById("secondo");
const terzo = document.getElementById("terzo");
const quarto = document.getElementById("quarto");
const quinto = document.getElementById("quinto");

/**acquisisco il submit */

const eventForms = document.getElementById("form");


/**metto i numeri dentro la variabile */

for (let i = 0; i < 5; i++) {
    const curNumber = randomizzatore(99, 1);
    randomNum.push(curNumber);
}

/**prima funzione di callback */

btnStart.addEventListener("click", function () {
    introDiv.classList.add("d-none");
    timerDiv.classList.remove("d-none")
    const startGame = setInterval(function () {
        countdown.innerHTML = t;
        if (t === 0) {
            clearInterval(startGame);
            timerDiv.classList.add("d-none");
            numberDiv.classList.remove("d-none");
            secondCounter();
        }
        t--;

        primo.innerHTML = randomNum[0];
        secondo.innerHTML = randomNum[1];
        terzo.innerHTML = randomNum[2];
        quarto.innerHTML = randomNum[3];
        quinto.innerHTML = randomNum[4];




    }, 1000);


})

/**seconda funzione di callback */

eventForms.addEventListener("submit", function () {
    event.preventDefault();
    /**acquisisco le risposte */
    const inputOne = document.getElementById("prima-risposta");
    const inputTwo = document.getElementById("seconda-risposta");
    const inputTree = document.getElementById("terza-risposta");
    const inputFor = document.getElementById("quarta-risposta");
    const inputFive = document.getElementById("quinta-risposta");

    oneValue = parseInt(inputOne.value);
    twoValue = parseInt(inputTwo.value);
    treeValue = parseInt(inputTree.value);
    forValue = parseInt(inputFor.value);
    fiveValue = parseInt(inputFive.value);


    formDiv.classList.add("d-none");
    answrDiv.classList.remove("d-none");

    result.innerHTML = "hai indovinato"
        if(randomNum.includes(oneValue)){
            result.innerHTML += ", il primo numero"
        }

        if(randomNum.includes(twoValue)){
            result.innerHTML += ", il secondo numero"
        }

        if(randomNum.includes(treeValue)){
            result.innerHTML += ", il terzo numero"
        }

        if(randomNum.includes(forValue)){
            result.innerHTML += ", il quarto numero"
        }

        if(randomNum.includes(fiveValue)){
            result.innerHTML += ", il quinto numero"
        }
    

})

/**terza funzione di callback */
btnRestart.addEventListener("click", function(){
    answrDiv.classList.add("d-none");
    introDiv.classList.remove("d-none");
    t = 5;
    for (let i = 0; i < 5; i++) {
        const curNumber = randomizzatore(99, 1);
        randomNum.push(curNumber);
    }
})









/**funzione randomizzatore */

function randomizzatore(max, min) {
    const numeroTemporaneo = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroTemporaneo
}

function secondCounter() {
    setTimeout(function () {
        numberDiv.classList.add("d-none");
        formDiv.classList.remove("d-none");
    }, 1000)
}


