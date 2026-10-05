/**
 * Exponenciacion: eleva una base a un exponente (base ^ exponente).
 * Funcion del Grupo 5 - Integracion grupo5-raiz/exponenciacion
 *
 * @param {number} base      Base de la potencia.
 * @param {number} exponente Exponente al que se eleva la base.
 * @returns {{ok: boolean, valor: number|null, error: string|null}}
 */
export function exponenciacion(base, exponente) {
  if (typeof base !== "number" || !Number.isFinite(base)) {
    return { ok: false, valor: null, error: "La base debe ser un numero valido." };
  }

  if (typeof exponente !== "number" || !Number.isFinite(exponente)) {
    return { ok: false, valor: null, error: "El exponente debe ser un numero valido." };
  }

  if (base === 0 && exponente < 0) {
    return {
      ok: false,
      valor: null,
      error: "No se puede elevar 0 a un exponente negativo (resultado indefinido)."
    };
  }

  const valor = Math.pow(base, exponente);

  if (Number.isNaN(valor)) {
    return {
      ok: false,
      valor: null,
      error: "No existe un resultado real para esa base y ese exponente."
    };
  }

  return { ok: true, valor, error: null };
}
