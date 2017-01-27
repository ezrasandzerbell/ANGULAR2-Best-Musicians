import {Pipe, PipeTransform} from '@angular/core';
import {Member} from './member.model';

@Pipe({
  name: "genre",
  pure: false
})


export class GenrePipe implements PipeTransform {
  transform(input: Member[], desiredGenre){
      var output: Member[] = [];
      if (desiredGenre === "Classical") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].genre === desiredGenre) {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredGenre === "Jazz") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].genre === desiredGenre) {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredGenre === "Popular") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].genre === desiredGenre) {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }
}
