import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MypipePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'mypipe',
})
// export class MypipePipe implements PipeTransform {
//   /**
//    * Takes a value and makes it lowercase.
//    */
//   transform(value: string, ...args) {
//     return value.toLowerCase();
//   }
// }

export class MypipePipe implements PipeTransform {
    transform(data:any[],fterm: string) {

        if(fterm&&fterm.trim()!=''){
            return data.filter((name)=>{
                return (name.name.toLowerCase().indexOf(fterm.toLowerCase())>-1);
            })
        }
        return data;
    }
}
