import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
    transform(value: number): string {
        switch(value) {
            case 1: return 'Only One Vote :('
            case 2: return 'Two votes :)'
            case 3: return 'Three votes :D'
            default: return value.toString() + ' !!!'
        }
    }

}