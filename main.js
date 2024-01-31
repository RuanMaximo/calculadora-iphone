let display = document.getElementById('display');
let historico = document.getElementById('historico');

function LimiteDigitos(){
    let quantidadeDigitos = display.value.length;
    let limiteDigitos = 6;
    if (quantidadeDigitos > limiteDigitos) {
        display.style.fontSize = '33px';
    } else {
        display.style.fontSize = '48px';
    }
}

display.addEventListener('input',LimiteDigitos)


function appendToDisplay(value) {
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value += value;
    }
    LimiteDigitos();
}
function negativoDisplay(sinal) {
    display.value = sinal;
}
function porcentagemDisplay(value) {
    display.value += value;
    display.value = eval(display.value);
}
function clearDisplay() {
    display.value = '';
    LimiteDigitos();
}
function removerDisplay(){
    let currentValue = display.value;
    display.value = currentValue.slice(0,-1);
}
function calculateResult() {
    try {
        let calculo = display.value;
        let result = eval(display.value);
        display.value = result.toFixed(2);
        addToHistorico(calculo,result);
    } catch (error) {
        preventDefault (error);
    }
};

function addToHistorico(calculo,value) {
    if (historico.children.length > 6) {
        historico.removeChild(historico.children[0]);
    }
    historico.innerHTML += `<div class="ctn_historico">${calculo} = ${value.toFixed(2)}</div>`;
};

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculateResult();
    }
});


function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Adiciona um zero à esquerda se o número for menor que 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes;

    document.getElementById('clock').innerText = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();


    // var nivelBateria = document.getElementById('bateria');
    // var porcentagem = 100;
  
    // function diminuirPorcentagem() {
    //   if (porcentagem > 0) {
    //     porcentagem -= 1;
    //     nivelBateria.innerText = porcentagem;
    //     // nivelBateria.style.background = 'gray';
    //   }
    // }
  
    // setInterval(diminuirPorcentagem, 14400);
