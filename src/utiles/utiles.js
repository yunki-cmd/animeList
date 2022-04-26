export function convertFecha(fecha) {
  const f = new Date(fecha);
  return f.toISOString().split("T")[0];
};