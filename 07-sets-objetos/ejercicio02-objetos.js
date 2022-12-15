const datos = {
    nombre: 'Jose',
    apellido: 'Domingo',
    edad: 48,
    altura: 183,
    eresDesarrollador: true,
}
const edad = datos.edad;
console.log(edad);//48

const lista = [
    {...datos},
    {
        nombre: 'Victor',
        apellido: 'Prieto',
        edad: 48,
        altura: 184,
        eresDesarrollador: true,
    },
    {
        nombre: 'Ana',
        apellido: 'Calvo',
        edad: 44,
        altura: 155,
        eresDesarrollador: false,
    }

]
const listaOrdenada = lista.sort((a,b)=> b.edad - a.edad);
console.log(listaOrdenada);