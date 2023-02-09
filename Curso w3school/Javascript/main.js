//Obtener los valores de los inputs

function getCalc() {
  const x = document.getElementById("input_number1").value;
  const y = document.getElementById("input_number2").value;
  const operator = getOperation();

  if (!isNaN(x) && !isNaN(y)) {
    let numeric1 = parseFloat(x);
    let numeric2 = parseFloat(y);
    resultado = getValue(numeric1, numeric2, operator);
    if (resultado != "error") {
      document.getElementById("resultado").innerHTML = resultado.toString();
    } else {
      alert("Se produjo un error.");
    }
  } else {
    alert("No son números, por favor ingresar números");
  }
}

function getOperation() {
  const radioButtons = document.querySelectorAll('input[name="operacion"]');
  //Evento de boton, para comprobar cuál radiobutton está activo
  let operationSelected;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      operationSelected = radioButton.value;
      break;
    }
  }
  return operationSelected;
}

function getValue(x, y, operator) {
  var error = false;
  ErrorColor(error);
  switch (operator) {
    case "sumar":
      value = x + y;
      break;

    case "restar":
      value = x - y;
      break;

    case "multiplicar":
      value = x * y;
      break;

    case "division":
      if (y != 0) {
        value = x / y;
        return value;
      } else {
        alert(
          "Para realizar la división, el denominador debe ser distinto a 0."
        );
        error = true;
        ErrorColor(error);  
      }
      break;
    default:
      error = true;
      break;
  }

  if (error) {
    return "error";
  } else {
    return value;
  }
}

function ErrorColor(error){
  const input = document.getElementById('input_number2')
  if(!error){
    input.style.backgroundColor = 'rgba(107, 238, 107, 0)';
  }else{
    input.style.backgroundColor = 'rgba(238, 7, 7, 0.309)';
  }
}