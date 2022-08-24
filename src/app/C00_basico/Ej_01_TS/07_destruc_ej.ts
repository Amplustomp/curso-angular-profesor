// Export para que despues funcione el import
export    interface Objeto {
        desc: string;
        precio: number;
    }
// Observe que tenemos tres constantes del mismo objeto    
    const telefono: Objeto = {
        desc: 'Nokia A1',
        precio: 250
    }
    
    const tableta: Objeto = {
        desc: 'iPad Air',
        precio: 950
    }
    const tv: Objeto = {
        desc: 'Televisión',
        precio: 500
    }
    
    
    
    export function calculaIVA( Objetos: Objeto[] ):[number, number] {
    
        let total = 0;
        /*
        Objetos.forEach(  (prod) => {
            total += prod.precio;
        })*/
        // precio Destructurado de Objeto
        Objetos.forEach(  ({ precio }) => {
            total += precio;
        })
    
        return [total, total * 0.21];
    
    }
    
    
    const articulos = [ telefono, tableta ,tv];
    
     const [ total, iva ] = calculaIVA( articulos );
    
     console.log('Total:', total );
     console.log('IVA:', iva);
    