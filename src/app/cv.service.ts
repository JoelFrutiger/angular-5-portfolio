import { Injectable } from '@angular/core';
import { CVEntry } from './content/work/cvEntry';

@Injectable()
export class CvService {

  getWorkExp(){
    return [
      new CVEntry("2014-2018","Noser Young Professionals AG","nyp"),
      new CVEntry("2009-2014","Noser Young Professionals AG","nyplehre"),
      new CVEntry("2005","Office für Büroarbeiten Thun","prakti"),
      new CVEntry("2004","CWA Constructions AG","cwa")
    ]
  }

  getEduExp(){
    return [
      new CVEntry("2015-today","Berner Fachhochschule","bach"),
      new CVEntry("2009-2014","Gibb Bern","info"),
      new CVEntry("2009-2014","Gibb Bern","bms"),
      new CVEntry("2010-2014","Handelsmittelschule Thun","diplom")
    ]
  }

}
