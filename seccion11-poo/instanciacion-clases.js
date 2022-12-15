class Persona {
    constructor (nombre, edad, isDeveloper) {
        //Las variables dentro de una clase se llaman atributos
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }
    //Las funciones en una clase se llaman métodos
    saludo () {
        console.log(`Hola, mi nombre es ${ this.nombre }, tengo ${ this.edad } años.`)
        //Hola, mi nombre es Gorka, tengo 34 años. 
    }
}
//Instanciar es inicializar una clase
const nueva_persona = new Persona("Gorka", 34, true)
console.log(nueva_persona)//Persona { nombre: 'Gorka', edad: 34, isDeveloper: true }
nueva_persona.saludo()

let numero = 60 // inicializar
console.log(typeof numero)// number

let persona_2 = new Persona("Maria", 34, false) // instanciar es inicializar una clase
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona)// true

// instanceof -> similar a typeof pero para clases