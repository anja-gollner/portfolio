import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [ TranslateModule, CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  references = [
    { title: 'references.textbox1', name: 'Simone A.' },
    { title: 'references.textbox2', name: 'Ricardo P.' },
    { title: 'references.textbox3', name: 'Lukas S' }
  ];

  currentIndex = 0;
  totalItems = 9;

  get repeatedReferences() {
    return Array.from({ length: this.totalItems }, (_, i) => this.references[i % this.references.length]);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalItems;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
  }
}
