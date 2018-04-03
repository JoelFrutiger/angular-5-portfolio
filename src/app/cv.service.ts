import { Injectable } from '@angular/core';
import { CVEntry } from './content/work/cvEntry';

@Injectable()
export class CvService {

  getWorkExp(){
    return [
      new CVEntry("2014-2018","Noser Young Professionals AG")
    ]
  }

}
