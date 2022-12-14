const hoy = new Date();
console.log(hoy);
const cumple = new Date(1975, 9-1, 24)
console.log(cumple);
const masTarde = hoy.getTime() > cumple.getTime();
console.log(masTarde);
const dia = cumple.getDate();
console.log(dia);
const mes = cumple.getMonth() + 1;
console.log(mes);
const anio = cumple.getFullYear();
console.log(anio);

