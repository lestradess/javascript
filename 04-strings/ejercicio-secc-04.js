const nombre = "Jose Luis";
const apellido = "Domingo";
const estudiante = `${nombre} ${apellido}`;
console.log(estudiante); //Jose Luis Domingo
const estudianteMayus = estudiante.toUpperCase();   
console.log(estudianteMayus); //JOSE LUIS DOMINGO
const estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);//jose luis domingo
//                       1
//             12345678901234567
//             Jose Luis Domingo
const variable = estudiante.length;
console.log(variable);//17
const variable2 = estudiante[0];
console.log(variable2);//J
const variable3 = estudiante[estudiante.length - 1];
console.log(variable3);//o
const variable4 = estudiante.replace(/\s+/g,"");
console.log(variable4);//JoseLuisDomingo
const contiene = estudiante.includes(nombre)
console.log(contiene);//true