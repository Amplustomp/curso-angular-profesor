//import { Objeto, calculaIVA } from './Ejercicios/07_destruc_ej';
import { Objeto, calculaIVA } from './07_destruc_ej';
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Objeto[] = [
    {
        desc: 'Telefono 10',
        precio: 400
    },
    {
        desc: 'Telefono 20',
        precio: 550
    },
];

const [total, iva] = calculaIVA( carritoCompras );

console.log( 'IMP. Total', total );
console.log( 'IMP. IVA', iva )


