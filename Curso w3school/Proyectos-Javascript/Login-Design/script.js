// Selecciona el elemento
var elemento = document.getElementById("submit-button");

// Obtiene el color de fondo
var colorFondo = window.getComputedStyle(elemento).backgroundColor;

// Convierte el valor del color de fondo de RGB a un arreglo
var valoresRGB = colorFondo.match(/\d+/g);

// Calcula el brillo del color de fondo
var brillo = (parseInt(valoresRGB[0]) * 299 + parseInt(valoresRGB[1]) * 587 + parseInt(valoresRGB[2]) * 114) / 1000;

// Cambia el color de la fuente en consecuencia
console.log( "nivel de brillo: " + brillo);

if (brillo > 125) {
  elemento.style.color = "black";
} else {
  elemento.style.color = "white";
}