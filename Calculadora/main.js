const botonNumeros = document.querySelectorAll('.numeros');
const botonOperadores = document.querySelectorAll('.operador');
const displayValorActual = document.getElementById('valor-actual');
const displayValorAnterior = document.getElementById('valor-anterior');

// // // // // // // // // // // // // // // // // // // //
// Control de Displays // // // // // // // // // // // //
//ValorAnterior
let valorAnterior = '0'
//ValorActual
let valorActual = '0'
// // // // // // // // // // // // // // // // // // //

//// // // // // // // // // // // // // // // / // // //
// Control de Calculos // // // // // // // // // // // //
let num_anterior = []
let num_actual = []
// // / // // // // // // // // // // // // // // // // //

botonNumeros.forEach(boton => {
    boton.addEventListener('click', () => displayEscribir(boton.innerHTML,'numeros'))
})

botonOperadores.forEach(boton => {
    boton.addEventListener('click', () => displayEscribir(boton.innerHTML,'operadores'))
})


function displayEscribir(caracter,operacion){
    
    switch(operacion){
        case "numeros":
            num = caracter;
            if(valorActual == '0'){
                valorActual = num;
            }else if(valorActual != '0'){
                valorActual += num
            }
            displayValorActual.innerHTML = valorActual;
            break;
        
        case "operadores":
            operador = caracter
            num_anterior.push(valorActual)
            num_anterior.push(operador)
            num_actual.push(valorActual)
            displayValorAnterior.innerHTML = "";
            for(let i = 0; i < num_actual.length; i++){
                displayValorAnterior.innerHTML += num_anterior[i] + " "; 
            }

            break;
    }
}

function calcular(){

}