// .some()
const array = [ 3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2 ]

const res = array.some(valor => valor < -0)

console.log(res)// true

const existe = array.some(valor => valor === 9)

console.log(existe) // true

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29 }
]

const existeJuan = listaObjetos.some(persona => persona.nombre === "Juan")

console.log(existeJuan)// false

// Cómo obtener una lista a partir de un objeto iterable
const str = "Hola soy Gorka"
console.log(str[ 5 ])// s

const ar_str = Array.from(str)
console.log(ar_str)//[ 'H', 'o', 'l', 'a', ' ', 's', 'o', 'y', ' ', 'G', 'o', 'r', 'k', 'a' ]

const set = new Set([ 2, 3, "hola", 4 ])
const ar_set = Array.from(set)
console.log(ar_set)// [ 2, 3, 'hola', 4 ]

const keys = array.keys()
console.log(keys)// { [Iterator] }

const ar_keys = Array.from(keys)
console.log(ar_keys)// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]