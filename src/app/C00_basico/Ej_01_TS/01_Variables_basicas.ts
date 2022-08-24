export function ej_01_variables_basicas() {
    console.log('Hola Harrys!JAJAJAJJAJ');

    /*
    ===== Código de TypeScript =====
    */

    let nombre = "Harrys"
    let apPaterno1 = "Ojeda"
    console.log(apPaterno1)
    // Error
    //nombre = 123
    let apPaterno:String = "Ojeda"
    const apMaterno:String = "Escalante"
    const calle = "Alcantara "
    let edad:number = 98
    // Permite ambos tipos de objetos
    let edadSt:number| String = 98
    edadSt = "prueba de texto"

    let esMujer:Boolean = true
}