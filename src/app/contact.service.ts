import { Injectable } from '@angular/core';
import { ContactEntry } from './content/contact/contactEntry';

@Injectable()
export class ContactService {

  getContactInfo(){
    return [
      new ContactEntry("E-Mail","j.frutiger@somedudes.ch"),

    ]
  }

}
