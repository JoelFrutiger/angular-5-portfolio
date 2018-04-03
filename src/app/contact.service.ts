import { Injectable } from '@angular/core';
import { ContactEntry } from './content/contact/contactEntry';

@Injectable()
export class ContactService {

  getContactInfo(){
    return [
      new ContactEntry("E-Mail","email"),
      new ContactEntry("LinkedIn","https://linkedin.com/joelfrutiger")

    ]
  }

}
