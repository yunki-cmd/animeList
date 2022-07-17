/* eslint-disable import/prefer-default-export */

export function validarNullUndefined(valor : any) {
  if (valor == null) return 1;
  return valor;
}

export function convertFecha(year:string, month:string, day:string) {
  const f = new Date(`${validarNullUndefined(year)}/${validarNullUndefined(month)}/${validarNullUndefined(day)}`);
  return f.toISOString().split("T")[0];
};