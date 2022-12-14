// Sets o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", { id: 5 }, "hola"]

const miSet = new Set(array)// valores únicos

console.log(array)//[ 1, 2, 3, 4, 5, 6, 1, 2, 5, 'hola', { id: 5 }, 'hola' ]
console.log(miSet)//Set { 1, 2, 3, 4, 5, 6, 'hola', { id: 5 } }

// .add() Añade un elemento al set
miSet.add(9) 
console.log(miSet)//Set { 1, 2, 3, 4, 5, 6, 'hola', { id: 5 }, 9 }
miSet.add(4)//No lo añade porque solo valen valores únicos
console.log(miSet)//Set { 1, 2, 3, 4, 5, 6, 'hola', { id: 5 }, 9 }

// .delete() Borra un elemento del set
miSet.delete("hola")
console.log(miSet)//Set { 1, 2, 3, 4, 5, 6, { id: 5 }, 9 }

// .clear() Borra todo el set
// miSet.clear()
// console.log(miSet)// Set { }

// .has()
// console.log(array.includes(2))
console.log(miSet.has(40))// false

// .size
console.log(miSet.size)// 8

miSet.forEach(valor => {
    console.log(valor)// 1, 2, 3, 4, 5, 6, { id: 5 }, 9 
})

const it_miSet = miSet.values()
console.log(it_miSet)// {[Iterator]}

const ar_miSet = [ ...miSet ]
console.log(ar_miSet[1])// 2