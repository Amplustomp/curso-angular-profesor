
export enum Color {
    rojo, negro, azul, verde
}

export enum Genero {
    F = "Femenino",
    M = "Masculino",
}
export interface IPersona {
    id?:string;
    run:number;
    dv:string;
    nombres: string;
    apPaterno: string;
    apMaterno: string;
    vuela?:boolean
    color?: Color;
    superhero?:string;
    alter_ego?:string;
    genero?:Genero;
    idImg?:string;
    pruebaOpcional?:string;
    pruebaOpcional2?:string;
    alt_img?:string;
}