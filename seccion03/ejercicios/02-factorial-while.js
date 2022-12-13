let numero = 1;
let multiplicador = 0;
let contador = 0;
while (contador < 10) {
    multiplicador = contador * numero
    numero += multiplicador
    console.log(numero);
    contador++;
}
console.log(numero);