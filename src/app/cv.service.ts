import { Injectable } from '@angular/core';
import { CVEntry } from './content/work/cvEntry';

@Injectable()
export class CvService {

  getWorkExp(){
    return [
      new CVEntry("2014-2018","Noser Young Professionals AG","Anstellung als Systemadministrator / Entwickler, bearbeiten von Supportanfragen, Wartung / Inbetriebnahme von Netzwerken, Planung und Durchführung von Projekten. Seit 2016: Entwicklung und Ausbildung in den Bereichen Java, iOS, Web und Datenbanken."),
      new CVEntry("2009-2014","Noser Young Professionals AG","Berufslehre zum Informatiker EFZ mit Schwerpunkt Systemtechnik. Bearbeiten von Supportanfragen, Wartung / Inbetriebnahme von Netzwerken, Planung und Durchführung von Projekten."),
      new CVEntry("2005","Office für Büroarbeiten Thun","Einmonatiges Praktikum als Kaufmann bei Office für Büroarbeiten in Thun."),
      new CVEntry("2004","CWA Constructions AG","Zwei Wochen handwerkliche Tätigkeit.")
    ]
  }

  getEduExp(){
    return [
      new CVEntry("2015-today","Berner Fachhochschule","Bachelor Computer Science"),
      new CVEntry("2009-2014","Gibb Bern","Informatiker EFZ"),
      new CVEntry("2009-2014","Gibb Bern","Technische Berufsmaturität"),
      new CVEntry("2010-2014","Handelsmittelschule Thun","Kaufmännisches Diplom")
    ]
  }

}
