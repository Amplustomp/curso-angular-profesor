interface Persona_v15{
    rut:1;
    dv:String;
    nombres:String;
}

//Private, Public, Protected
class PersonaV10 {
    // si coloco los accesos(public ,private,protected) las variables 
    // pasan a ser de las clases
    // ? => opcional
    constructor( 
        public nombre: string, 
        public direccion?: string 
    )  {
        console.log("Persona v10")
    }
}


class Heroe extends PersonaV10 {

    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'New York, USA' );
    }

}

const ironman = new Heroe('Ironman',45, 'Tony');

console.log(ironman);