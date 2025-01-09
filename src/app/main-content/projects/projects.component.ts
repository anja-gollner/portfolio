import { Component, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsService } from '../../services/projects.service';
import { OverlayComponent } from './overlay/overlay.component';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, OverlayComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projectinfos = inject(ProjectsService);
  projects = this.projectinfos.getProjects();

  overlayVisible = signal(false);
  selectedProject = signal<Project | null>(null);


  openOverlay(project: Project) {
    this.selectedProject.set(project);
    this.overlayVisible.set(true);
    document.body.classList.add('no-scroll');
  }

  closeOverlay() {
    this.overlayVisible.set(false);
    this.selectedProject.set(null);
    document.body.classList.remove('no-scroll');
  }
}
