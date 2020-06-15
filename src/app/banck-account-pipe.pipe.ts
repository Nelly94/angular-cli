import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankAccountPipe'
})
export class BanckAccountPipePipe implements PipeTransform {
  private result: string;

  transform(value: string, arg1?: number): any {
    if (arg1 !== undefined){
      console.log('arg1 not undefined: ' + arg1);
      if (value.length !== arg1){
        return 'Invalid bank account';
      }
    }
    this.result = '';
    this.result += value.substr(0, 4);
    this.result = this.result.padEnd(12, '*');

    return this.result;
  }

}
