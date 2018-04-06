import { Injectable } from '@angular/core';
import { Language } from './content/about-me/language';
import { Interest } from './content/about-me/interest';

@Injectable()
export class AboutService {

  getLang(){
    return [
      new Language("German","Mother language"),
      new Language("English","Fluid"),
      new Language("Französisch","Good knowlege"),
      new Language("Spanish","Basic knowlege")
    ]
  }

  getInterests(){
    return [
      new Interest("Sport","Sports"),
      new Interest("Culture","Cultures"),
      new Interest("IT","ITs")
    ]
  }

}
