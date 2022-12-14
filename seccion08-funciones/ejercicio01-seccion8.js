function verdadero () {
    return true;
}

async function asincrona () {
    return setTimeout(() => console.log("Hola mundo"), 5000)
}
let contador = 0
function* pares () {
    while (true) {
        yield contador += 2;

    }
}
console.log(pares().next().value);// 2
console.log(pares().next().value);// 4
console.log(pares().next().value);// 6
console.log(pares().next().value);// 8


