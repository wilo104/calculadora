let numero1 =0;
let numero2=0;
let operador1;
function numero(valor) {
  document.getElementById("pantalla").innerHTML += valor;
}



function limpiar() {
  document.getElementById("pantalla").innerHTML = "";
  document.getElementById("numero1").innerHTML = "";
  numero1 = 0;
}

document.addEventListener(
  "keydown",
  (event) => {
    var code = event.key;
    numero(code);
    if ((code = "+")) {
      resultado((operador1 = code));
    }
  },
  false
);

function resultado() {
  numero2 = document.getElementById("pantalla").textContent;
  let suma = 0;
if(numero1 !=0){
    switch (operador1) {
        case "+":
          suma = parseFloat(numero1) + parseFloat(numero2);
          document.getElementById("pantalla").innerHTML = suma;
          document.getElementById("numero1").innerHTML = "";
          break;
        case "-":
          suma = parseFloat(numero1) - parseFloat(numero2);
          document.getElementById("pantalla").innerHTML = suma;
          document.getElementById("numero1").innerHTML = "";
          break;
        case "*":
          suma = parseFloat(numero1) * parseFloat(numero2);
          document.getElementById("pantalla").innerHTML = suma;
          document.getElementById("numero1").innerHTML = "";
          break;
        case "/":
          suma = parseFloat(numero1) / parseFloat(numero2);
          document.getElementById("pantalla").innerHTML = suma;
          document.getElementById("numero1").innerHTML = "";
          break;
    
        default:
          break;
      }
}

  
}

function operacion(operador) {
  numero1 = document.getElementById("pantalla").textContent;
  operador1 = operador;
  document.getElementById("numero1").innerHTML = numero1 + operador;
  document.getElementById("pantalla").innerHTML = "";
}
