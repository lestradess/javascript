const nota = 0;
switch (nota) {
    case 5:
        console.log("Sobresaliente");
        break;
    case 4:
        console.log("Bien");
        break;
    case 3:
        console.log("Suficiente");
        break;
    case 2:
        console.log("Insuficiente");
        break;
    case 1, 0:
        console.log("Muy deficiente");
        break;
    default:
        console.log("Error introduce una nota válida");
        break;
}
