//Instancia persona
const persona = {
    rut : 1,
    nombre : 'Harrys',
    apPaterno:'Ojeda'
}
// Instancia Persona1 con dos campos
const persona1 = {
    rut : 1,
    nombre : 'Harrys'
}


const persona_any:any = {
    rut : 1,
    nombre : 'Harrys'
}
persona_any.apPaterno = 'Error'
// El objetivo es declarar la estructura que quiero utilizar siempre
interface Persona{
    rut:number;
    dv:string;
    deportes:string[];
    nombres:string;
    apPaterno?:string; // ? es opcional
    apMaterno?:string; // ? es opcional
}

const persona_v3:Persona = {
     rut :1 ,
     dv:'1'  ,
     deportes:['tennis','piscina','pelota'],
     nombres:'Harrys',
     apPaterno:'Ojeda'
}
const persona_v4:Persona=null
const persona_v5:Persona=null
const persona_v6:Persona=null
console.table(persona_v3)