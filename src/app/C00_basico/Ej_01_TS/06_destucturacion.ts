interface Comuna{
    id:number;
    nombre:String;
}

interface PersonaV9{
    rut:number;
    dv:string;
    deportes_1?:string[];
    nombres_2?:string;
    apPaterno?:string; // ? es opcional
    apMaterno?:string; // ? es opcional
    // Un objeto del tipo interfaz comuna    
    comuna:Comuna;
}
//const p1 : Persona ={  // Error por los demas archivos
const p1 : PersonaV9 ={
    rut:1,
    dv:'9',
    comuna:{
        id:1,
        nombre:'Santiago'
    }
}

console.log("rut",p1.rut)
console.log("dv",p1.dv)
console.log("comuna",p1.comuna.nombre)


// Puede haber ya una variable nombre
//const {comuna:{nombre},rut,dv} = p1;
const {comuna:{nombre:comunNombre},rut,dv} = p1;
/*
const dv = p1.dv;
const rut = p1.rut;
const {dv,rut,nombre,direccion,edad,fechaNacimiento,calle,nro} = p1;
*/
console.log("rut",rut)
console.log("dv",dv)
console.log("comuna",comunNombre)
const {comuna:{nombre:pvNombre},rut:pvRut,dv:pvDv} = p1;
console.log("rut",pvRut)
console.log("dv",pvDv)
console.log("comuna",pvNombre)
//******************************** Arreglos */

const deportes :String[]=['bicicleta','piscina','rueda']
const [px1,px2,px3] = deportes
console.log("p1",px1)
console.log("p2",px2)
console.log("p3",px3)

const [,,pxx3] = deportes

console.log("pxx3",pxx3)

//******************************** Objetos */