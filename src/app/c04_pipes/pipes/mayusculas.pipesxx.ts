import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'pipe_mayuscula'
})

export class MayusculaPipe implements PipeTransform{
    /*
    transform(value: any, ...args: any[]) {
        return "HOLAMUNDO"
    }*/

    transform(stPara:string,enMay:boolean = true):string{
        /*
        if (enMay)
           return stPara.toUpperCase()
        else           
           return stPara.toLowerCase()
        */
       return (enMay)?stPara.toUpperCase():stPara.toLowerCase()
    }

}