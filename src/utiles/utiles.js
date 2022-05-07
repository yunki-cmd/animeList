/* eslint-disable import/prefer-default-export */

export function validarNullUndefined(valor) {
  if (valor === undefined || valor === null) return 1;
  return valor;
}

export function convertFecha(year, month, day) {
  const f = new Date(`${validarNullUndefined(year)}/${validarNullUndefined(month)}/${validarNullUndefined(day)}`);
  return f.toISOString().split("T")[0];
};