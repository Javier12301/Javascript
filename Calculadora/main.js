const botonNumeros = document.querySelectorAll('.numeros');
const botonOperadores = document.querySelectorAll('.operador');
const displayValorActual = document.getElementById('valor-actual');
const displayValorAnterior = document.getElementById('valor-anterior');

// // // // // // // // // // // // // // // // // // // //
// Control de Displays // // // // // // // // // // // //
//ValorAnterior
let valorAnterior = 0
//ValorActual
let valorActual = 0
// // // // // // // // // // // // // // // // // // //

botonNumeros.forEach(boton => {
    boton.addEventListener('click', () => console.log(boton.innerHTML))
})


function calcular(){
    if(comprobarOperador() && comprobarNumeros()){
        const num1 = parseFloat(txtOp1.value)
        const num2 = parseFloat(txtOp2.value)
        let resultado;
        switch(txtOperador.value){
            case "+":
               resultado = num1 + num2
               break;
            case "-":
                resultado = num1 - num2
                break;
            case "*":
                resultado = num1 * num2
                break;
            case "/":
                resultado = num1 / num2
                break;
        }
        pResultado.innerHTML = "El resultado es: " + resultado
        pResultado.style = "color: black";
        


    }else{
        pResultado.innerHTML = "No hay números o no ingreso correctamente el operador"
        pResultado.style = "color: red";
    }


}

function comprobarOperador(){
    const a = txtOperador.value
    if(a == "+" | a == "-" || a == "*" || a == "/"){
        return true
    }else{
        return false
    }
}

function comprobarNumeros(){
    const a = parseFloat(txtOp1.value)
    const b = parseFloat(txtOp2.value)
    if(!isNaN(a) && !isNaN(b)){
        return true
    }else{
        return false
    }
}



console.log(txtOp1);