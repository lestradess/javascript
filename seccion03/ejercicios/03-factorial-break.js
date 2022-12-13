let numero = 1;
let multiplicador = 0;
let contador = 0;
while (true) {
    multiplicador = contador * numero
    numero += multiplicador
    console.log(numero);
    contador++;
    if (contador >= 10) break;
}
console.log(numero);