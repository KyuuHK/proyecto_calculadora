# proyecto_calculadora
Carpeta base del Parcial 01

## Funcion del Grupo 5

| Funcion | Ubicacion | Inputs | Autor |
|---|---|---|---|
| `raiz` | `funciones/raiz.js` | 1 (indice opcional, por defecto 2) | Ruby-Celesia |
| `exponenciacion` | `funciones/exponenciacion.js` | 2 (base y exponente) | KyuuHK (Jose Abrego) |

Ambas funciones retornan el objeto `{ ok, valor, error }` para que `app.js`
muestre el resultado o un mensaje de error sin romper el calculo.

### Uso

- `raiz(9)` o `raiz(27, 3)`
- `exponenciacion(2, 10)`

### Pruebas

```bash
node pruebas/exponenciacion.test.js
node pruebas/grupo5-integracion.test.js
```
