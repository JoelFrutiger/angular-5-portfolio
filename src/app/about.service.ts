import { Injectable } from '@angular/core';
import { Language } from './content/about-me/language';
import { Interest } from './content/about-me/interest';

@Injectable()
export class AboutService {

  getLang(){
    return [
      new Language("Deutsch","Muttersprache"),
      new Language("English","fliessend (First Certificate)"),
      new Language("Französisch","gute Kenntnisse"),
      new Language("Spanisch","Grundkenntnisse")
    ]
  }

  getInterests(){
    return [
      new Interest("Sport","Fussball, Surfen, Skifahren, Breakdance, Capoeira"),
      new Interest("Kultur","Lesen, Reisen, Film, Konzerte besuchen"),
      new Interest("IT","Kryptowährungen, Virtual Reality")
    ]
  }

}
