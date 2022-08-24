
// dos parámetros obligatorio
function sumar(n1 , n2){
    // dependiendo del los tipos de entrada
    // concatena o suma
    return n1 + n2
}

const resultado = sumar(1,7)
const resultado_2 = sumar('juan','perez')
const resultado_3 = sumar('juan',72)
const resultado_4 = sumar(10,72)
const resultado_5 = sumar(10,'72')  // 82 1072
//  int a  = 10.5 + 11.8
//  int a  =  (int) 10.5  + (int)11.8
//  int a  =  10  + 11  ==>

// casting explicito
//  int a  =  (int)((double) 10.5  + (double)11.8)  == >22.3
//  int a =  22
console.log('resultado', resultado)
console.log("resultado 2 : ",resultado_2)
console.log("resultado 3 : ",resultado_3)
console.log("resultado 4 : ",resultado_4)
console.log("resultado 5 : ",resultado_5)

// dos parámetros obligatorio
function sumar_v2(n1:number , n2:number){
    // dependiendo del los tipos de entrada
    // concatena o suma

    return  (n1 + n2)

    //return "el Total es :" + (n1 + n2)
    //return (n1 + n2).toString()
}
const resultado_55 = sumar_v2(11,72)
console.log("resultado 55 v2 : ",resultado_55)

function sumar_v3(n1:number , n2:number):number{
    // suma
    return n1 + n2
}
const resultado_6 = sumar_v3(12,72)
console.log("resultado 5 v3 : " + resultado_6)

// funciona igual que ==> function sumar(n1 , n2)
const sumar_flecha  = (n1, n2) => {
    return n1 + n2
}
const sumar_flecha_v1 =(n1:number, n2:number):number =>{
    return n1 + n2
}
// ? opcionl, despues no puede venir un no default
// se puede agregar un valor defecto y puede pasar =10
function mulpli(n1:number ,n2?:number , base:number=10):number{
    return n1*base
}

const re1 = mulpli(2,9)   // debiera resulta 20
const re2 = mulpli(2)     // debiera resulta 20
const re3 = mulpli(2,3,4)  // debiera resulta 8

console.log(re1)
console.log(re2)
console.log(re3)


console.log(mulpli(2,9))
console.log(mulpli(2))
console.log(mulpli(2,3,2))


function nada():void{
    return undefined
}
//*********************** */
interface PersonaV3{
    rut:number;
    dv:string;
    deportes?:string[];
    nombres?:string;
    apPaterno?:string; // ? es opcional
    apMaterno?:string; // ? es opcional
    mostrarNombre:(n1:number,n2:number)=> void;
    /*
    mostrarNombre:(n1:number,n2:number)=> void {
        console.log("Su Nombre es : ",this.nombres)
    }*/
}

function prueba(p1:PersonaV3):void{
    p1.nombres="prueba"
    console.log("interno",p1.nombres)
}
let p2:PersonaV3={rut:1,
                   dv:'1',
                   mostrarNombre(){console.log("Su Nombre es : ",this.nombres)}
                };
p2.nombres= "pesotrial"
console.log(p2.nombres)
prueba(p2)
console.log("fuera",p2.nombres)