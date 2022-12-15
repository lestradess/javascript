// Principales operaciones aritméticas
let a = 3.5;
let b = 4.8;

// Suma (+)
console.log(a + b);//8.3
// Resta (-)
console.log(a - b);//-1.2999999999999998
// Multiplicación (*)
console.log(a * b);//16.8
// División (/)
console.log(a / b);//0.7291666666666667

// Representación de los números en cadenas de texto
console.log(typeof a);//number
let a_s = a.toString();

console.log(a_s);//3.5
console.log(typeof a_s);//string

// Redondeo de números decimales
let c = 3.3;
let d = c * 3;

console.log(d);//9.89999999999999
console.log(typeof d);// number

// .toFixed(x) - Limitar el número de decimales al valor x
console.log(d.toFixed(4));//9.9000
console.log(typeof d.toFixed(4));// string

let e = 1839.1232456789;
let f = 2213556153215;
console.log(e.toFixed(2));//1839.12
console.log(f.toFixed(2));//2213556153215.00

// .toPrecision(x) - Limita el número de cifras significativas
console.log(e.toPrecision(7));//1839.123
console.log(f.toPrecision(7));//2.213556e+12

console.log(typeof f.toPrecision(3));//string