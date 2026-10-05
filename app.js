import { suma } from './funciones/suma.js';
import { promedio } from './funciones/promedio.js';
import { multiplicacion } from './funciones/multiplicacion.js';
import { maximo } from './funciones/maximo.js';
import { raiz } from './funciones/raiz.js';
import { division } from './funciones/division.js';
import { seno } from './funciones/seno.js';
import { potencia } from './funciones/potencia.js';
import { minimo } from './funciones/minimo.js';
import { log } from './funciones/log.js';
import { exponenciacion } from './funciones/exponenciacion.js';

document.addEventListener("DOMContentLoaded", () => {

  const operacion = document.getElementById("operacion");
  const valor1 = document.getElementById("valor1");
  const valor2 = document.getElementById("valor2");
  const labelValor2 = document.getElementById("labelValor2");
  const btnCalcular = document.getElementById("btnCalcular");

  // Mostrar u ocultar Valor 2 según la operación
  function actualizarCampos() {
    const esSeno = operacion.value === "seno";

    valor2.hidden = esSeno;
    labelValor2.hidden = esSeno;
  }

  // Actualizar los campos al cambiar de operación
  operacion.addEventListener("change", actualizarCampos);

  // Configurar los campos al cargar la página
  actualizarCampos();

  // Ejecutar el cálculo al pulsar el botón
  btnCalcular.addEventListener("click", calcular);

});

function calcular() {

  const op = document.getElementById("operacion").value;
  const v1 = parseFloat(document.getElementById("valor1").value);
  const v2 = parseFloat(document.getElementById("valor2").value);

  // Validar los valores ingresados
  if (isNaN(v1)) {
    alert("Ingrese un valor válido para Valor 1");
    return;
  }

  // El seno solamente necesita el primer valor
  if (op !== "seno" && isNaN(v2)) {
    alert("Ingrese un valor válido para Valor 2");
    return;
  }

  let resultado;

  if (op === "suma") {
    resultado = suma(v1, v2);

  } else if (op === "promedio") {
    resultado = promedio(v1, v2);

  } else if (op === "maximo") {
    resultado = maximo(v1, v2);

  } else if (op === "multiplicacion") {
    resultado = multiplicacion(v1, v2);

  } else if (op === "raiz") {
    resultado = raiz(v1, v2);

  } else if (op === "division") {

    if (v2 === 0) {
      alert("No se puede dividir entre cero");
      return;
    }

    resultado = division(v1, v2);

  } else if (op === "seno") {
    resultado = seno(v1);

  } else if (op === "potencia") {

    resultado = potencia(v1, v2);

  } else if (op === "minimo") {

    resultado = minimo(v1,v2);
    
  } else if (op === "log") {
   
    resultado = log(v1, v2)
  
  } else if (op === "exponenciacion") {

    const res = exponenciacion(v1, v2);

    if (!res.ok) {
      alert(res.error);
      return;
    }

    resultado = res.valor;

  } else {
    alert("Operación no válida");
    return;
  }

  document.getElementById("resultado").innerText =
    "Resultado: " + resultado;
}