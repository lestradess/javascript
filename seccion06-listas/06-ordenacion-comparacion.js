// .sort() -> MODIFICA EL ARRAY
const array = [ 2, 5, 9, 15, 1, 2, 0, 4 ]

console.log(array)// [ 2, 5, 9, 15, 1, 2, 0, 4 ]

//la variable a coge el valor del primer elemento y la b del siguiente
//Y se va intercambiando el valor
array.sort((a, b) => {
    if (a < b) {
        return +11568 //cualquier valor positivo
    } else if (a > b) {
        return -153697//cualquier valor negativo
    } else { // a === b
        return 0
    }
})

console.log(array)// [ 15, 9, 5, 4, 2, 2, 1, 0 ]

// Ordenar únicamente arrays numéricos
const arrayNumerico = [ 4, 1, 7, 3, 1, 3, 56, 1, 546 ]

//En caso de querer ordenarlo de menor a mayor se pondría a -b
arrayNumerico.sort((a, b) => b - a)

console.log(arrayNumerico)// [ 546, 56, 7, 4, 3, 3, 1, 1, 1 ]

// Interesante en arrays de objetos
const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29 }
]

// listaObjetos.sort((a, b) => {
//     if (a.edad < b.edad) {
//         return -1
//     } else if (a.edad > b.edad) {
//         return +1
//     } else {
//         return 0
//     }
// })
listaObjetos.sort((a, b) => a.edad - b.edad)

console.log(listaObjetos)//Los ordena de menor a mayor edad