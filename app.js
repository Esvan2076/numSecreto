let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;
condicionesIniciales();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento () {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroUsuario===numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        //el usuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número es menor');
        } else {
            asignarTextoElemento('p', 'El número es mayor');
        }
        limpiarCaja();
        intentos ++;
    }
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    //querySelector cuando lo vamos a modificar
    //getElementById cuando lo vamos a tomar
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if(numeroMaximo === numerosSorteados.length){
        asignarTextoElemento('p', 'Ya se han sorteado todos los números');
    } else {
        //Si el numero generado esta en la lista
        if(numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    return;
}