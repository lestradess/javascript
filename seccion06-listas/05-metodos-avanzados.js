// Trabajar con métodos más avanzados
// .map() .filter() .reduce()

const array = [ "San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao" ]

const val = array.forEach(v => {
    console.log(v)//San Sebastián, Madrid, Barcelona, Alicante, Bilbao
    return 4
})
console.log(val)// undefined
//***MAP********************/
const newArray = array.map((valor, indice) => `${ indice + 1 } - ${ valor }`)
console.log(newArray)
//['1 - San Sebastián', '2 - Madrid', '3 - Barcelona', ' 4 - Alicante', '5 -Bilbao']

//******FILTER**************/
const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29 }
]
// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 30) {
//         return true
//     } else {
//         return false
//     }
// })
const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores)
//[ {nombre: 'Leire', edad: 35 }, {nombre: 'Gorka', edad: 34 } ]

//Todas las personas menos Miguel
const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel")
console.log(nuevaLista) 


//**********Reduce 
const valores = [ 3, 56, 23, 5, 90, 100 ]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado) // 3, 59, 82, 87, 177 || va sumando un valor al siguente
    console.log(cur)// 56, 23, 5, 90, 100
    console.log(i)// 1, 2, 3, 4, 5
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)//277