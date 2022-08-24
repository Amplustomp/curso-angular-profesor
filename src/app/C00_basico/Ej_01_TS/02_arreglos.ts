// Arreglo de any vacio
// any no es bueno, mejor ser estricto
let productos = []
// Varios Objetos diferentes
let productos_v1 = [1,2,'Juan',[1,2,3,4,5]]
// Detecta que es un arreglo de tipo string
let productos_nombres = ['Zapatillas','Televisores','Cafeteras']
productos_nombres.push("1") // puedo agregar string
//productos_nombres.push(1) // no  puedo agregar otro tipo de objeto

// Tipo String o number
let productos_nombres_mescla = ['Zapatillas','Televisores','Cafeteras',900]
productos_nombres_mescla.push(456) // Ahora si

let productos_nombres_objetos:(Boolean|String|number)[] = ['Zapatillas','Televisores','Cafeteras',900]
productos_nombres_objetos.push(true) // Ahora si