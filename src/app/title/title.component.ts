import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';
import { Content } from '../content/content';
import { ContentService } from '../content.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  animations: [
    trigger('flyIn', [
      state('in', style({ width: "600px", transform: 'translateX(0)', opacity: 1 })),
      transition('void => *', [
        style({ width: "0px", transform: 'translateX(30px)', opacity: 0 }),
        group([
          animate('0.8s 0.3s ease', style({
            transform: 'translateX(0)',
            width: "600px"
          })),
          animate('1.5s ease', style({
            opacity: 1
          }))
        ])
      ])
    ])
  ]
})
export class TitleComponent implements OnInit {


  contents: Content[];
  private translate;

  constructor(private contentService: ContentService, translate: TranslateService) {
    this.contents = this.contentService.getContent();
    //Remove content tile used for profile picture
    this.contents.splice(1, 1);

    this.translate = translate;
    // this language will be used as a fallback when a translation isn't found in the current language
    if (translate.getBrowserLang() == 'de') {
      translate.setDefaultLang('de');
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('de');
    }
    else{
      translate.setDefaultLang('en');
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('en');
    }
  }


  switchLanguage(language: string) {
    this.translate.use(language);
    console.log(this.translate);
  }

  toggleLanguage(language: string) {
    if (this.translate.currentLang == "de") {
      this.translate.use("en");
    }
    else {
      this.translate.use("de");
    }
  }

  ngOnInit() {
  }

}
