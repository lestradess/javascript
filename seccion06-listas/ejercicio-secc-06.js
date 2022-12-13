const lista = ['fruta', 'verdura', 'carne', 'pescado', 'pan'];

lista.push("Aceite de Girasol");
console.log(lista);
lista.pop();
console.log(lista);

const pelis = [
    {
        titulo: "El padrino",
        director: "Francis Ford Coppola",
        fecha: new Date(1972, 10, 20)

    },
    {
        titulo: "Pulp Fiction",
        director: "Quetin Tarantino",
        fecha: new Date(1995, 1, 13)

    },
    {
        titulo: "Enola Holmes",
        director: "Harry Bradbeer",
        fecha: new Date(2020, 9, 23)

    },
];
const pModernas = pelis.filter(p => p.fecha > new Date(2010, 0, 1));
console.log(pModernas);
const directores = pelis.map(p => p.director);
console.log(directores);
const titulos = pelis.map(p => p.titulo);
console.log(titulos);
const dirTitulos = directores.concat(titulos);
console.log(dirTitulos);
const directoresTitulos = [...directores, ...titulos];
console.log(directoresTitulos);