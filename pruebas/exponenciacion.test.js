import { exponenciacion } from "../funciones/exponenciacion.js";
import { suma } from "../funciones/suma.js";
import { promedio } from "../funciones/promedio.js";
import { multiplicacion } from "../funciones/multiplicacion.js";
import { maximo } from "../funciones/maximo.js";
import { raiz } from "../funciones/raiz.js";
import { division } from "../funciones/division.js";
import { seno } from "../funciones/seno.js";
import { potencia } from "../funciones/potencia.js";
import { minimo } from "../funciones/minimo.js";
import { log } from "../funciones/log.js";

let passed = 0;
let failed = 0;

function check(descripcion, condicion) {
  if (condicion) {
    passed++;
    console.log("  PASA  " + descripcion);
  } else {
    failed++;
    console.log("  FALLA " + descripcion);
  }
}

function checkOk(descripcion, base, exponente, esperado) {
  const res = exponenciacion(base, exponente);
  check(
    descripcion + "  ->  " + base + "^" + exponente,
    res.ok === true && res.valor === esperado
  );
}

function checkError(descripcion, base, exponente) {
  const res = exponenciacion(base, exponente);
  check(
    descripcion + "  ->  " + base + "^" + exponente,
    res.ok === false && typeof res.error === "string" && res.error.length > 0
  );
}

console.log("\n=== GRUPO 5 - EXPONENCIACION (Jose Abrego / KyuuHK) ===\n");

console.log("Casos correctos:");
checkOk("2^3", 2, 3, 8);
checkOk("5^0", 5, 0, 1);
checkOk("0^7", 0, 7, 0);
checkOk("(-3)^2", -3, 2, 9);
checkOk("(-3)^3", -3, 3, -27);
checkOk("7^2", 7, 2, 49);
checkOk("10^4", 10, 4, 10000);
checkOk("2^10", 2, 10, 1024);
checkOk("1^99", 1, 99, 1);
checkOk("4^(1/2)", 4, 0.5, 2);
checkOk("27^(1/3)", 27, 1 / 3, 3);
checkOk("(-2)^-1", -2, -1, -0.5);
checkOk("4^-2", 4, -2, 0.0625);
checkOk("2^0.5", 2, 0.5, Math.SQRT2);

console.log("\nCasos de error:");
checkError("Base no numerica", "abc", 2);
checkError("Exponente no numerico", 2, "xyz");
checkError("Base indefinida", undefined, 2);
checkError("Exponente NaN", 2, NaN);
checkError("0 elevado a negativo", 0, -1);
checkError("Base negativa con exponente fraccionario", -4, 0.5);
checkError("Infinito", Infinity, 2);

console.log("\n=== REGRESION: FUNCIONES ORIGINALES Y DE OTROS GRUPOS ===\n");
check("suma(22, 33) = 55", suma(22, 33) === 55);
check("promedio(4, 8) = 6", promedio(4, 8) === 6);
check("multiplicacion(6, 7) = 42", multiplicacion(6, 7) === 42);
check("maximo(9, 3) = 9", maximo(9, 3) === 9);
check("minimo(9, 3) = 3", minimo(9, 3) === 3);
check("division(10, 2) = 5", division(10, 2) === 5);
check("seno(0) = 0", seno(0) === 0);
check("potencia(3, 4) = 81", potencia(3, 4) === 81);
// raiz devuelve un numero en main y {ok, valor, error} en la rama del companero:
// se aceptan ambas formas para que la prueba sobreviva a la integracion.
const raizRes = raiz(9, 2);
const raizValor = typeof raizRes === "object" && raizRes !== null ? raizRes.valor : raizRes;
check("raiz(9, 2) = 3 (acepta ambas versiones)", raizValor === 3);
// log(v1, v2) = logaritmo en base v1 de v2  (Kevin Rodriguez - Grupo 4)
check("log(2, 8) = 3", log(2, 8) === 3);

console.log("\n================================================");
console.log("Pruebas correctas: " + passed);
console.log("Pruebas fallidas:  " + failed);
console.log("================================================\n");

process.exit(failed === 0 ? 0 : 1);
