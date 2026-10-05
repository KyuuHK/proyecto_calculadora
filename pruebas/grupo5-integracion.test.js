import { raiz } from "../funciones/raiz.js";
import { exponenciacion } from "../funciones/exponenciacion.js";

let passed = 0;
let failed = 0;

function check(descripcion, condicion) {
  if (condicion) {
    passed++;
    console.log("  PASA   " + descripcion);
  } else {
    failed++;
    console.log("  FALLA  " + descripcion);
  }
}

// RAIZ - Ruby-Celesia: retorna {ok, valor, error}
function raizOk(descripcion, a, b, esperado) {
  const res = raiz(a, b);
  check(descripcion, res.ok === true && res.valor === esperado);
}

function raizError(descripcion, a, b) {
  const res = raiz(a, b);
  check(
    descripcion,
    res.ok === false && typeof res.error === "string" && res.error.length > 0
  );
}

// EXPONENCIACION - KyuuHK: retorna {ok, valor, error}
function expoOk(descripcion, a, b, esperado) {
  const res = exponenciacion(a, b);
  check(descripcion, res.ok === true && res.valor === esperado);
}

function expoError(descripcion, a, b) {
  const res = exponenciacion(a, b);
  check(
    descripcion,
    res.ok === false && typeof res.error === "string" && res.error.length > 0
  );
}

console.log("\n=== GRUPO 5 - PRUEBAS DE INTEGRACION (raiz + exponenciacion) ===\n");

console.log("RAIZ (Ruby-Celesia) - casos correctos:");
raizOk("raiz(9) = 3 (indice por defecto 2)", 9, undefined, 3);
raizOk("raiz(9, 2) = 3", 9, 2, 3);
raizOk("raiz(27, 3) = 3", 27, 3, 3);
raizOk("raiz(16, 4) = 2", 16, 4, 2);
raizOk("raiz(25) = 5", 25, undefined, 5);
raizOk("raiz(-8, 3) = -2 (raiz impar de negativo)", -8, 3, -2);

console.log("\nRAIZ (Ruby-Celesia) - casos de error:");
raizError("raiz(-4, 2): raiz par de negativo", -4, 2);
raizError("raiz(9, 0): indice 0", 9, 0);

console.log("\nEXPONENCIACION (KyuuHK) - casos correctos:");
expoOk("exponenciacion(2, 10) = 1024", 2, 10, 1024);
expoOk("exponenciacion(3, 5) = 243", 3, 5, 243);
expoOk("exponenciacion(10, 3) = 1000", 10, 3, 1000);
expoOk("exponenciacion(7, 1) = 7", 7, 1, 7);
expoOk("exponenciacion(5, 0) = 1", 5, 0, 1);
expoOk("exponenciacion(-2, 3) = -8", -2, 3, -8);
expoOk("exponenciacion(9, 1/2) = 3", 9, 0.5, 3);
expoOk("exponenciacion(2, -2) = 0.25", 2, -2, 0.25);

console.log("\nEXPONENCIACION (KyuuHK) - casos de error:");
expoError("exponenciacion(0, -3): 0 a exponente negativo", 0, -3);
expoError("exponenciacion(-8, 1/2): sin resultado real", -8, 0.5);
expoError("exponenciacion('a', 2): base no numerica", "a", 2);
expoError("exponenciacion(2, 'b'): exponente no numerico", 2, "b");

console.log("\n=== RESULTADO DE LA INTEGRACION ===");
console.log("raiz + exponenciacion conviven sin romperse: " + (failed === 0 ? "SI" : "NO"));
console.log("================================================");
console.log("Pruebas correctas: " + passed);
console.log("Pruebas fallidas:  " + failed);
console.log("================================================\n");

process.exit(failed === 0 ? 0 : 1);
