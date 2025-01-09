import { CommonModule } from '@angular/common';
import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsService } from '../../../services/projects.service';
import { Project } from '../../../interfaces/project.interface';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss',
})
export class OverlayComponent {
  currentIndex: number = 0;
  projectinfos = inject(ProjectsService);

  @Input() project: Project | null = null;
  @Input() projects: Project[] = [];
  @Output() close = new EventEmitter<void>();

  emitCloseEvent() {
    this.close.emit();
  }

  getStackIconPath(stack: string): string {
    return `assets/img/${stack.toLowerCase()}-green.png`;
  }

  ngOnChanges(): void {
    if (this.project) {
      this.currentIndex = this.projects.findIndex(
        (p) => p.id === this.project?.id
      );
    }
  }

  redirectToUrl(url: string): void {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.error('URL is not defined!');
    }
  }
  

  nextProject(): void {
    if (this.projects.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
      this.project = this.projects[this.currentIndex];
    }
  }
}
