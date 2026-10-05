export function raiz(a, b = 2) {
  const indice = (typeof b === 'object' && b !== null)
    ? (b.indice ?? (b.exponente ? 1 / b.exponente : 2))
    : (b === undefined || isNaN(b) ? 2 : b);

  const onError = (typeof b === 'object' && typeof b?.onError === 'function')
    ? b.onError
    : (msg) => console.error(`[Error Raíz]: ${msg}`);

  if (indice === 0) {
    const error = "El índice de la raíz no puede ser 0.";
    onError(error);
    return { ok: false, valor: null, error };
  }

  if (a < 0 && indice % 2 === 0) {
    const error = "No existe raíz real par de un número negativo.";
    onError(error);
    return { ok: false, valor: null, error };
  }

  const valor = a < 0
    ? -Math.pow(-a, 1 / indice)
    : Math.pow(a, 1 / indice);

  return { ok: true, valor, error: null };
}