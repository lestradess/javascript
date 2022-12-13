// Cómo obtener una lista a partir de otra .slice()
const array = [ "hola", 1, 2, 3, true, null, "adios" ]

// NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(array.slice(1, 4))// [1, 2, 3 ]
const array2 = array.slice(2, 5)
console.log(array2)// [2, 3, true ]

const array3 = array.slice(2, -2)
console.log(array3)// [2 , 3, true]