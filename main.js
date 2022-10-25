// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keydownEnter)

// Funções
function handleTryClick(event){
    event.preventDefault() //Não faça o evento padrão

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10){
        alert("Por favor insira um número de 0 a 10!")
    } else if(Number(inputNumber.value) == "") {
        alert("Insira um número para começar a jogar!")
    } else {

        if(Number(inputNumber.value) == randomNumber){
        
            toggleScreen()
    
            screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
        }
    
        inputNumber.value = ""
    
        xAttempts++
    }
}

function handleResetClick() {
    randomNumber = Math.round(Math.random() * 10)

    toggleScreen()

    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function keydownEnter(event) {
    if(event.key == 'Enter' && screen1.classList.contains(hide)) {
        handleResetClick
    }
}
