import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    const storedLang = localStorage.getItem('language');

    if (storedLang) {
      this.translate.use(storedLang);
    } else {
      this.translate.setDefaultLang('de');
      this.translate.use('de');
    }
  }

  toggleLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'en' ? 'de' : 'en';
    this.translate.use(newLang);
    localStorage.setItem('language', newLang);
  }

  currentLanguage() {
    return this.translate.currentLang;
  }
}