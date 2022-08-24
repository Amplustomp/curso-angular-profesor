console.log('Hola Harrys!');

interface Pasajero {
    nombre: string;
    hijos?: string[]
  }
  
  const pasajero1: Pasajero = {
    nombre: 'Fernando'
  }
  
  const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia','Gabriel']
  }
  
  
  function imprimeHijos( pasajero: Pasajero ): void {
    //pasajero.hijos?  ==> intenta seguir
    // si no existe devuelve 0
    const cuantosHijos = pasajero.hijos?.length || 0;
    
    console.log( cuantosHijos );
  
  }
  
  
  imprimeHijos( pasajero1 );