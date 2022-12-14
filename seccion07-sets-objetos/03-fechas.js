// Trabajando con fechas
const fecha = new Date()

console.log(fecha)// fecha de ahora mismo

// Atención - Los meses inicializan en 0 (0 - Enero, 11 - Diciembre)
//Date (año,mes,dia,hora,minuto,segundo,milisegundo)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192)

console.log(fecha2)//Fri Nov 20 1987 01:23:52 GMT+0100 (hora estándar de Europa central)

const fecha3 = new Date(-10000000000000) // Milisegundos
console.log(fecha3)// Mon Feb 10 1653 05:58:36 GMT-0014 (hora estándar de Europa central)

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4)//Sat Oct 13 1979 12:15:15 GMT+0100 (hora estándar de Europa central)

console.log(fecha < fecha2)// false

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha5)// Fri Nov 20 1987 01:23:52 GMT+0100 (hora estándar de Europa central)

console.log(fecha2 === fecha5) // ERROR - No se pueden comparar fechas de esta manera // false

console.log(fecha2.getTime() === fecha5.getTime()) // OK - Esta es la forma de comparar la igualdad entre fechas // true

/////// Obtener el día, el mes y el año de una fecha
// Obtener el día .getDate()
console.log(fecha2.getDate())// 20

// Obtener el mes .getMonth() (0 - Enero, 11 - Diciembre)
console.log(fecha2.getMonth() + 1)// 11

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear())// 1987

console.log(fecha2)// Fri Nov 20 1987 01:23:52 GMT+0100 (hora estándar de Europa central)

// .toLocaleDateString
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("en-US"))// 11/20/1987
console.log(fecha2.toLocaleDateString("en-GB"))// 20/11/1987