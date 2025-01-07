import { Component, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsService } from '../../services/projects.service';
import { OverlayComponent } from '../overlay/overlay.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, OverlayComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private projectsService = inject(ProjectsService);
  projects = this.projectsService.getProjects();


  overlayVisible = signal(false);
  selectedProject = signal<ProjectsService | null>(null);

  openOverlay(project: ProjectsService) {
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
