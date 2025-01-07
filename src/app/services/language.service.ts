import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    if (!this.translate.currentLang) {
      this.translate.setDefaultLang('de');
      this.translate.use('de');
    }
  }

  toggleLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'en' ? 'de' : 'en';
    this.translate.use(newLang);
  }

  currentLanguage() {
    return this.translate.currentLang;
  }
}