import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  languageService = inject(LanguageService);

  imageDE = 'assets/img/toggle-de.png';
  imageEN = 'assets/img/toggle-en.png';

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

}
